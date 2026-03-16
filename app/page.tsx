'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github, Coffee, Download, ArrowRight, Shield, Lock, Zap, Folder, Tag, Image as ImageIcon, Table, Moon, Monitor, BookOpen, ChevronUp } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="lab-i logo" className="w-8 h-8 object-contain" />
              <span className="font-bold text-lg">lab-i</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-white transition">
                How It Works
              </button>
              <button onClick={() => scrollToSection('providers')} className="text-gray-400 hover:text-white transition">
                Providers
              </button>
              <button onClick={() => scrollToSection('downloads')} className="text-gray-400 hover:text-white transition">
                Downloads
              </button>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a href="https://github.com/lab-intelligence" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg hover:border-slate-500 transition">
                <Github size={18} />
                GitHub
              </a>
              <a href="https://github.com/lab-intelligence/lab-i-app/releases" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition">
                Download
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-2 text-gray-400 hover:text-white">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left px-4 py-2 text-gray-400 hover:text-white">
                How It Works
              </button>
              <button onClick={() => scrollToSection('providers')} className="block w-full text-left px-4 py-2 text-gray-400 hover:text-white">
                Providers
              </button>
              <button onClick={() => scrollToSection('downloads')} className="block w-full text-left px-4 py-2 text-gray-400 hover:text-white">
                Downloads
              </button>
              <a href="https://github.com/lab-intelligence" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-slate-400 hover:text-slate-300">
                GitHub
              </a>
              <a href="https://github.com/lab-intelligence/lab-i-app/releases" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 bg-slate-700 text-white font-semibold rounded text-center">
                Download
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-black to-black pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800 mb-8">
            <span className="text-sm text-gray-400">Open Source · Free · Local First</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl font-black mb-8 leading-tight">
            Automated Laboratory
            <br />
            Image Organization
          </h1>

          {/* Subheading */}
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            lab-i (short for lab-intelligence) is a free, open source app that automatically classifies and organises your images using AI. Built for researchers. Works for everyone.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-full text-sm">
              <Zap size={16} className="text-slate-400" />
              BYOK — Bring Your Own Key
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-full text-sm">
              <Lock size={16} className="text-slate-400" />
              Privacy First
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-full text-sm">
              <Monitor size={16} className="text-slate-400" />
              Works Offline
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/lab-intelligence/lab-i-app/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition flex items-center justify-center gap-2"
            >
              Download
              <ArrowRight size={18} />
            </a>
            <a
              href="https://lab-i.gitbook.io/lab-i/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-700 rounded-lg hover:border-slate-500 transition flex items-center justify-center gap-2"
            >
              <BookOpen size={18} />
              Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-slate-400 text-sm font-semibold mb-2">Why lab-i</p>
            <h2 className="text-4xl font-black">Image organization shouldn't slow down your research</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Folder,
                title: 'Manual Tagging is Tedious',
                description: 'Imaging sessions produce hundreds of files. Sorting them manually takes hours. That is time taken away from actual research.'
              },
              {
                icon: Lock,
                title: 'Existing Tools Demand Accounts',
                description: 'Most classification tools require sign-ups, subscriptions, or cloud uploads. Researchers shouldn\'t need a billing relationship just to sort files.'
              },
              {
                icon: Shield,
                title: 'Your Images Should Stay Private',
                description: 'Sensitive lab images, unpublished results, and proprietary data should never leave your device without your explicit choice.'
              }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="p-6 border border-gray-800 rounded-lg bg-gray-900/30 hover:border-slate-600/50 transition">
                  <IconComponent className="text-slate-400 mb-4" size={28} />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-400 text-sm font-semibold mb-2">How it Works</p>
              <h2 className="text-4xl font-black mb-6">
                Define categories. <span className="text-slate-400">lab-i organizes.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-4">
                lab-i is a local-first image classification tool. You define the categories, supply an AI provider (or use Ollama), and lab-i automatically sorts your images into labeled folders.
              </p>
            </div>

            {/* Terminal Block */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              <div className="flex gap-2 p-4 bg-gray-950 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="p-6 font-mono text-sm text-slate-300 overflow-x-auto">
                <div>$ lab-i classify ./experiment-images/</div>
                <div className="text-gray-400 mt-2">Found 247 images...</div>
                <div className="text-gray-400">Classifying with label set: Biology</div>
                <div className="text-green-500 mt-2">✓ Gel         → 84 images sorted</div>
                <div className="text-green-500">✓ Microscopy  → 63 images sorted</div>
                <div className="text-green-500">✓ Drosophila  → 41 images sorted</div>
                <div className="text-green-500">✓ Petriplate  → 35 images sorted</div>
                <div className="text-yellow-600">✓ Uncertain   → 24 images flagged</div>
                <div className="text-gray-400 mt-2">Done in 4m 12s. Results saved to results.csv</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">Up and running in minutes</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Download',
                description: 'Get the binary for your platform (Windows, macOS, Linux) or APK for Android.'
              },
              {
                step: '2',
                title: 'Add an AI provider',
                description: 'Use Ollama for local offline classification, or OpenRouter, OpenAI, Anthropic, or Google for cloud-based options.'
              },
              {
                step: '3',
                title: 'Create categories',
                description: 'Define a label set. Create your own or use the built-in Biology set.'
              },
              {
                step: '4',
                title: 'Organize',
                description: 'Select a folder. lab-i classifies images and sorts them into labeled subfolders.'
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-700 text-white font-black rounded-full mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">What's included</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Features designed for research workflows.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Folder,
                title: 'Automatic Folder Organisation',
                description: 'Images are sorted into subfolders named after their label. No manual moving required.'
              },
              {
                icon: Tag,
                title: 'Custom Label Sets',
                description: 'Define your own categories. Save multiple label sets for different experiments or workflows.'
              },
              {
                icon: ImageIcon,
                title: 'Gallery View',
                description: 'Browse your sorted images by category. Flag uncertain results. Share, delete, or inspect any file.'
              },
              {
                icon: Table,
                title: 'CSV Export',
                description: 'Every classification result is exported to a CSV file — filename, label, confidence score, flagged status.'
              },
              {
                icon: Moon,
                title: 'Dark and Light Theme',
                description: 'lab-i respects your preference. Switch between dark and light mode in settings.'
              },
              {
                icon: Monitor,
                title: 'Works on Every Platform',
                description: 'Android APK, Linux, Windows, and macOS — all from a single codebase. Download the right build for your device.'
              }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="p-6 border border-gray-800 rounded-lg bg-gray-900/30 hover:border-slate-600/50 transition">
                  <IconComponent className="text-slate-400 mb-4" size={28} />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section id="providers" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Choose your AI provider</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            lab-i supports multiple providers. You control the keys and calls. Your images never leave your machine.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              {[
                { name: 'OpenRouter', description: 'Free tier, recommended for getting started' },
                { name: 'Ollama', description: 'Local, offline, completely private' },
                { name: 'OpenAI', description: 'GPT-4o, highest accuracy' },
                { name: 'Anthropic', description: 'Claude Sonnet, strong visual reasoning' },
                { name: 'Google Gemini', description: 'Free tier available' }
              ].map((provider, i) => (
                <div key={i} className="p-4 border border-gray-800 rounded-lg bg-gray-900/30">
                  <h3 className="font-bold mb-1">{provider.name}</h3>
                  <p className="text-gray-400 text-sm">{provider.description}</p>
                </div>
              ))}
            </div>

            {/* Callout */}
            <div className="flex flex-col justify-center">
              <div className="p-8 border border-slate-700/30 rounded-lg bg-slate-900/30 space-y-4">
                <div className="flex items-start gap-4">
                  <Shield className="text-slate-400 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold mb-2">For sensitive data</h3>
                    <p className="text-gray-400">
                      Use Ollama for complete local processing. Your images never leave your device.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-400 text-sm font-semibold mb-2">Design Principles</p>
              <h2 className="text-4xl font-black mb-8">
                Built for <span className="text-slate-400">privacy</span>
              </h2>

              <div className="space-y-6">
                {[
                  { icon: Shield, title: 'No Accounts', description: 'No servers, sign-ups, or logins.' },
                  { icon: Lock, title: 'Local Storage', description: 'Everything stays on your device.' },
                  { icon: Monitor, title: 'No Tracking', description: 'No telemetry, usage tracking, or data collection.' }
                ].map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <IconComponent className="text-slate-400 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
              <p className="text-gray-400">
                lab-i was built with research in mind. Sensitive images — patient-adjacent data, unpublished results, proprietary specimens — should never be at risk. With lab-i, they aren't.
              </p>
              <p className="text-gray-400 mt-4">
                For maximum privacy, use Ollama and your images never leave your machine at all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">Get started</h2>
          <p className="text-gray-400 mb-12">Available for all platforms.</p>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { name: 'Android', label: 'APK' },
              { name: 'Linux', label: 'Binary' },
              { name: 'Windows', label: 'Binary' },
              { name: 'macOS', label: 'Binary' }
            ].map((os, i) => (
              <a
                key={i}
                href="https://github.com/lab-intelligence/lab-i-app/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-gray-800 rounded-lg bg-gray-900/30 hover:border-slate-600 transition flex flex-col items-center justify-center gap-2"
              >
                <Download className="text-slate-400" size={28} />
                <span className="font-bold">{os.name}</span>
                <span className="text-xs text-gray-500">{os.label}</span>
              </a>
            ))}
          </div>

          <p className="text-sm text-gray-500 mb-12">
            All builds are compiled automatically from the open source code via GitHub Actions.<br />
            <a href="https://github.com/lab-intelligence/lab-i-app" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-300">
              View the source
            </a>
          </p>

          <details className="inline-block text-left bg-gray-900/50 border border-gray-800 rounded-lg p-4 max-w-md">
            <summary className="cursor-pointer font-semibold">Android Installation Note</summary>
            <p className="text-sm text-gray-400 mt-3">
              Android will warn you about installing from an unknown source. This is normal for apps distributed outside the Play Store. Tap Settings → Allow from this source to proceed.
            </p>
          </details>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center bg-gray-900/50 border border-gray-800 rounded-lg p-12">
          <Coffee className="text-slate-400 mx-auto mb-6" size={48} />
          <h2 className="text-3xl font-black mb-4">Enjoying lab-i?</h2>
          <p className="text-gray-400 mb-8">
            lab-i is free and open source. If it's been helpful, consider supporting the developer.
          </p>
          <a
            href="https://buymeacoffee.com/sameermann"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition"
          >
            <Coffee size={20} />
            Buy a Coffee
          </a>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition animate-in fade-in slide-in-from-bottom-4 duration-200"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Built by — Maintainer Section */}
      <section className="bg-black border-t border-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            
            {/* Info */}
            <div className="text-center md:text-left flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">
                lab-i is an independent open source project
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <h3 className="text-lg font-medium text-slate-200">Sameer Mann</h3>
                <span className="hidden md:inline text-gray-600">·</span>
                <span className="text-sm text-gray-400">Developer</span>
              </div>
              <div className="mt-3 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm">
                <a 
                  href="mailto:sameermann5335@gmail.com" 
                  className="text-gray-500 hover:text-slate-300 transition-colors"
                >
                  sameermann5335@gmail.com
                </a>
                <span className="hidden sm:inline text-gray-700">|</span>
                <a 
                  href="https://sameer.goneto.space" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-slate-300 transition-colors"
                >
                  sameer.goneto.space
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="lab-i logo" className="w-8 h-8 object-contain" />
                <span className="font-bold">lab-i</span>
              </div>
              <p className="text-sm text-gray-400">
                Automated laboratory image organisation. Built by a solo developer, for researchers worldwide.
              </p>
              <a href="https://github.com/lab-intelligence" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-slate-300 mt-4 inline-block">
                <Github size={20} />
              </a>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="https://github.com/lab-intelligence/lab-i-app/releases" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
                    Download
                  </a>
                </li>
                <li>
                  <a href="https://lab-i.gitbook.io/lab-i/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="https://github.com/lab-intelligence" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://github.com/lab-intelligence/lab-i-app/issues" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
                    Report a Bug
                  </a>
                </li>
              </ul>
            </div>


          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <span>Made for Researchers by a <a href="https://sameer.goneto.space/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">Student</a>.</span>
            <span>© 2026 lab-i. Licensed under MIT License.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
