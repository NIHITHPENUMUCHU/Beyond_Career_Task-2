import React, { useState, useEffect } from 'react';
import { AuthModal } from './components/AuthModal';
import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';
import { ProfilePage } from './components/ProfilePage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { CareerRoadmapPage } from './components/pages/CareerRoadmapPage';
import { MentorshipPage } from './components/pages/MentorshipPage';
import { JobPortalPage } from './components/pages/JobPortalPage';
import { ResourcesPage } from './components/pages/ResourcesPage';
import { ContactPage } from './components/pages/ContactPage';
import { supabase } from './lib/supabase';

interface User {
  id: string;
  email: string;
}

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loginError, setLoginError] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const [currentPage, setCurrentPage] = useState('home');
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setCurrentUser({
          id: session.user.id,
          email: session.user.email!
        });
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setCurrentUser({
          id: session.user.id,
          email: session.user.email!
        });

        // Create or update profile
        const { error: profileError } = await supabase
          .from('profiles')
          .upsert({
            id: session.user.id,
            email: session.user.email,
            username: session.user.user_metadata.username || session.user.email?.split('@')[0],
            updated_at: new Date().toISOString(),
          });

        if (profileError) {
          console.error('Error creating/updating profile:', profileError);
        }
      } else {
        setCurrentUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handlePageChange = (page: string) => {
    setIsPageTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsPageTransitioning(false);
    }, 300);
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      setLoginError('');
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      setIsLoginOpen(false);
    } catch (error: any) {
      setLoginError(error.message);
    }
  };

  const handleSignUp = async (name: string, email: string, password: string) => {
    try {
      setSignUpError('');
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username: name,
          },
        },
      });

      if (error) throw error;
      
      // Immediately sign in after signup
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;
      
      setIsSignUpOpen(false);
    } catch (error: any) {
      console.error('Error during sign up:', error.message);
      setSignUpError(error.message);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    } else {
      setCurrentUser(null);
    }
  };

  const renderPage = () => {
    const pageContent = currentUser ? (
      <ProfilePage user={currentUser} onLogout={handleLogout} />
    ) : (
      (() => {
        switch (currentPage) {
          case 'about':
            return <AboutPage />;
          case 'roadmap':
            return <CareerRoadmapPage />;
          case 'mentorship':
            return <MentorshipPage />;
          case 'jobs':
            return <JobPortalPage />;
          case 'resources':
            return <ResourcesPage />;
          case 'contact':
            return <ContactPage />;
          default:
            return <HomePage />;
        }
      })()
    );

    return (
      <div
        className={`page-enter ${!isPageTransitioning ? 'page-enter-active' : ''}`}
      >
        {pageContent}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar
        isLoggedIn={!!currentUser}
        onLoginClick={() => setIsLoginOpen(true)}
        onSignUpClick={() => setIsSignUpOpen(true)}
        userEmail={currentUser?.email}
        onLogout={handleLogout}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />

      <AuthModal
        isOpen={isLoginOpen}
        onClose={() => {
          setIsLoginOpen(false);
          setLoginError('');
        }}
        title="Login"
      >
        <LoginForm onSubmit={handleLogin} error={loginError} />
      </AuthModal>

      <AuthModal
        isOpen={isSignUpOpen}
        onClose={() => {
          setIsSignUpOpen(false);
          setSignUpError('');
        }}
        title="Sign Up"
      >
        <SignUpForm onSubmit={handleSignUp} error={signUpError} />
      </AuthModal>
    </div>
  );
}

export default App;