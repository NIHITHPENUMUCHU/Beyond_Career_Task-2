import React, { useState, useEffect } from 'react';
import { User, Mail, Camera, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Profile {
  username: string;
  avatar_url: string | null;
  bio: string;
}

interface ProfilePageProps {
  user: {
    id: string;
    email: string;
  };
  onLogout: () => void;
}

export function ProfilePage({ user, onLogout }: ProfilePageProps) {
  const [profile, setProfile] = useState<Profile>({
    username: '',
    avatar_url: null,
    bio: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProfile();
  }, [user.id]);

  async function getProfile() {
    try {
      setError(null);
      const { data, error } = await supabase
        .from('profiles')
        .select('username, avatar_url, bio')
        .eq('id', user.id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // No profile found, create one
          const { data: newProfile, error: createError } = await supabase
            .from('profiles')
            .insert([
              {
                id: user.id,
                username: user.email.split('@')[0],
                bio: '',
                email: user.email
              }
            ])
            .select()
            .single();

          if (createError) throw createError;
          if (newProfile) setProfile(newProfile);
        } else {
          throw error;
        }
      } else if (data) {
        setProfile(data);
      }
    } catch (error: any) {
      console.error('Error loading profile:', error);
      setError('Failed to load profile data');
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile(e: React.FormEvent) {
    e.preventDefault();
    try {
      setError(null);
      const { error } = await supabase
        .from('profiles')
        .update({
          ...profile,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (error) throw error;
      setIsEditing(false);
    } catch (error: any) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile');
    }
  }

  async function handleAvatarUpload(event: React.ChangeEvent<HTMLInputElement>) {
    try {
      setError(null);
      if (!event.target.files || event.target.files.length === 0) {
        return;
      }
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}.${fileExt}`;

      // Remove old avatar if exists
      if (profile.avatar_url) {
        const oldFileName = profile.avatar_url.split('/').pop();
        if (oldFileName) {
          await supabase.storage
            .from('avatars')
            .remove([oldFileName]);
        }
      }

      const { error: uploadError, data } = await supabase.storage
        .from('avatars')
        .upload(fileName, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('avatars')
        .getPublicUrl(fileName);
      
      const newProfile = { ...profile, avatar_url: urlData.publicUrl };
      setProfile(newProfile);
      
      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          avatar_url: urlData.publicUrl,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (updateError) throw updateError;
    } catch (error: any) {
      console.error('Error uploading avatar:', error);
      setError('Failed to upload avatar');
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">Beyond Career</h1>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}
          
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mb-4">
                {profile.avatar_url ? (
                  <img
                    src={profile.avatar_url}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-full h-full p-6 text-gray-400" />
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-700 transition-colors">
                <Camera className="w-5 h-5 text-white" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {isEditing ? (
            <form onSubmit={updateProfile} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  value={profile.username || ''}
                  onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Bio
                </label>
                <textarea
                  value={profile.bio || ''}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Profile Information</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Username</p>
                    <p className="mt-1">{profile.username || 'Not set'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="mt-1">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Bio</p>
                    <p className="mt-1">{profile.bio || 'No bio yet'}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}