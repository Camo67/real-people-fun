/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Ticket, 
  Star, 
  MapPin, 
  Calendar, 
  Users, 
  Zap, 
  Trophy, 
  ShieldCheck,
  Music, 
  ChevronRight,
  ExternalLink,
  X, 
  Circle,
  Play
} from 'lucide-react';
import { useRef, useState, FormEvent } from 'react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-deep-bg/80 backdrop-blur-md border-b border-white/5">
    <div className="flex items-center space-x-3">
      <div className="w-12 h-12 relative group cursor-pointer">
        <img 
          src="https://ais-pre-bksdbbo5vpt7t4aw2o3vbm-490606231621.europe-west2.run.app/input_file_0.png" 
          alt="IRL Logo" 
          className="w-full h-full object-contain filter group-hover:drop-shadow-neon-cyan transition-all duration-500"
        />
      </div>
      <span className="font-display font-medium text-lg tracking-tighter uppercase hidden sm:block">IRL <span className="text-gray-500">Interactive Events</span></span>
    </div>
    <div className="flex items-center space-x-8 text-[10px] font-bold tracking-[0.2em] uppercase">
      <a href="#events" className="hover:text-brand-cyan transition-colors">The Shows</a>
      <a href="#gallery" className="hover:text-brand-cyan transition-colors">The Proof</a>
      <a href="#reviews" className="hover:text-brand-cyan transition-colors">The Word</a>
      <button className="bg-brand-cyan px-6 py-2 rounded-full font-black text-black hover:scale-105 transition-transform active:scale-95 shadow-neon-cyan text-[10px]">
        Secure the Vibe
      </button>
    </div>
  </nav>
);

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation variants for orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(20px)' },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 2.2
      }
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Reveal */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.15 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute w-[800px] h-[800px] bg-brand-cyan/20 blur-[150px] rounded-full pointer-events-none" 
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4"
      >
        <motion.div
          variants={itemVariants}
          className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
        >
          <span className="text-xs font-mono text-brand-cyan tracking-widest uppercase">
            <motion.span
              animate={{ opacity: [0, 1, 0, 1] }}
              transition={{ repeat: 3, duration: 0.2, delay: 0.5 }}
            >
              [ ACCESS AUTHORIZED ]
            </motion.span>
          </span>
        </motion.div>
        
        <motion.h1 
          variants={titleVariants}
          style={{ y, opacity }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase leading-[0.85] mb-4"
        >
          <span className="block text-white">You Had To</span>
          <motion.span 
            animate={{ 
              x: [0, -2, 2, -2, 0],
              filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              delay: 3
            }}
            className="block italic text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple"
          >
            Be There.
          </motion.span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light tracking-wide mb-12"
        >
          The moments that don't make it to the group chat. High-energy gameshows, 
          unscripted chaos, and real human connection for those who know the difference.
        </motion.p>

        <motion.div 
          variants={buttonVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-5 bg-brand-cyan text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-neon-cyan active:scale-95 group relative overflow-hidden"
          >
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 3 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
            />
            Secure the Vibe
            <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            <Play className="w-4 h-4 fill-current" />
            Watch Showreel
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.5, scaleY: 1 }}
        transition={{ delay: 2.8, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 origin-bottom"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll to Enter</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-cyan to-transparent animate-pulse" />
      </motion.div>

      {/* Hero Reveal Scanline */}
      <motion.div 
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-0 right-0 h-[2px] bg-brand-cyan/30 shadow-[0_0_20px_rgba(0,255,255,0.5)] z-20 pointer-events-none"
      />
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto" id="events">
      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-auto gap-4">
        
        {/* Featured Card - Main Show */}
        <div className="md:col-span-8 md:row-span-2 bento-card border-brand-cyan/20 group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-transparent pointer-events-none" />
          <img 
            src="https://ais-pre-bksdbbo5vpt7t4aw2o3vbm-490606231621.europe-west2.run.app/input_file_2.png" 
            alt="Wedding Outside the Box" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale hover:opacity-40 transition-opacity duration-700"
          />
          <div className="relative z-10 h-full flex flex-col justify-end">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 text-brand-cyan font-mono text-xs uppercase tracking-tighter transform group-hover:translate-x-2 transition-transform">
                <Zap className="w-4 h-4" /> All-In-One Production
              </div>
              <div className="bg-brand-purple text-black text-[10px] font-black px-3 py-1 rounded-sm rotate-3 shadow-xl animate-bounce">
                80% of your wedding planned for $6000
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-black uppercase mb-2 tracking-tighter">Wedding-In-A-Box</h3>
            <p className="text-gray-400 max-w-md">
              The underground alternative to corporate weddings. Immersive games, professional hosting, and the vibe your guests will actually remember.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-bold tracking-wider uppercase">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">No Bystanders</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Collective Memory</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Unfiltered</span>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-8">
            <Trophy className="w-32 h-32 text-brand-cyan/20 group-hover:text-brand-cyan/40 group-hover:scale-110 transition-all duration-700" />
          </div>
        </div>

        {/* Small Card - Location */}
        <div className="md:col-span-4 bento-card border-brand-purple/20 group cursor-pointer hover:bg-brand-purple/5">
          <MapPin className="text-brand-purple mb-4 group-hover:animate-bounce" />
          <h4 className="text-xl font-bold uppercase mb-1">Sited in Westmont</h4>
          <p className="text-sm text-gray-500">Operating out of IL. Available anywhere that needs a pulse.</p>
        </div>

        {/* Small Card - Crowd */}
        <div className="md:col-span-4 bento-card border-brand-cyan/20 group">
          <Users className="text-brand-cyan mb-4 group-hover:scale-110 transition-transform" />
          <h4 className="text-xl font-bold uppercase mb-1">The Inner Circle</h4>
          <p className="text-sm text-gray-500">Every guest is part of the show. No one is safe from the fun.</p>
        </div>

        {/* Medium Card - Reviews Preview */}
        <a 
          href="https://www.gigsalad.com/irl_events-interactive_entertainment_chicago"
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-4 md:row-span-2 bento-card bg-gradient-to-b from-dark-card to-brand-purple/10 flex flex-col justify-between group hover:scale-[1.02] transition-all cursor-pointer border-brand-purple/30 md:h-[422px]"
        >
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-1 text-yellow-500">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <ExternalLink className="w-4 h-4 text-brand-purple opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-lg italic font-light mb-6 leading-relaxed">
              "IRL Events brought the absolute best energy to our corporate party! The interactive games were a huge hit and the host was phenomenal."
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center font-black text-black text-xs">ST</div>
               <div>
                 <p className="text-sm font-bold uppercase">Sarah T.</p>
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest">Verified GigSalad Review</p>
               </div>
            </div>
            <img src="https://www.gigsalad.com/images/gigsalad-logo-sm.png" alt="GigSalad" className="h-4 opacity-50 grayscale group-hover:grayscale-0 transition-all" />
          </div>
        </a>

        {/* Medium Card - Services */}
        <div className="md:col-span-4 bento-card border-brand-cyan/20 overflow-hidden relative md:h-[422px]">
          <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12">
            <ShieldCheck className="w-24 h-24" />
          </div>
          <h4 className="text-lg md:text-xl font-display font-black uppercase mb-4 tracking-tighter text-brand-cyan text-glow-cyan">Our Arsenal</h4>
          <p className="text-xs text-gray-400 mb-6 leading-relaxed">
            From bar-packed trivia nights to full-scale corporate game shows, IRL brings the kind of entertainment people actually talk about afterward. DJ, sound, streaming, lighting, and media support are the behind-the-scenes firepower that makes the whole room feel dialed in.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {[
              'Trivia Nights', 'Family Feud Style', 'Wheel of Fortune', 'Casino Nights', 
              'Music Bingo', 'Name That Tune', 'Karaoke', 'Team Building', 
              'Branded Activations', 'Fundraisers', 'Holiday Parties', 'Private Events'
            ].map((item, i) => (
              <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded-sm text-[9px] font-black uppercase tracking-widest text-white/70 hover:text-brand-cyan hover:border-brand-cyan transition-colors">
                {item}
              </span>
            ))}
            <span className="px-2 py-1 bg-brand-cyan/10 border border-brand-cyan/30 rounded-sm text-[9px] font-black uppercase tracking-widest text-brand-cyan">
              & Custom Experiences
            </span>
          </div>
        </div>

        {/* Small Card - Music */}
        <div className="md:col-span-4 bento-card border-white/10 text-center flex flex-col items-center justify-center group hover:border-brand-cyan/40">
          <div className="relative">
            <Music className="w-8 h-8 text-white mb-2 group-hover:rotate-12 transition-transform" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-cyan rounded-full animate-ping" />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cyan">Live DJ Sets Included</span>
        </div>

        {/* Stats Card */}
        <div className="md:col-span-12 bento-card border-white/5 py-12 flex flex-col md:flex-row items-center justify-around gap-8 text-center">
          <div>
            <p className="text-5xl font-display font-black text-white">500+</p>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-cyan mt-1">Events Hosted</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <div>
            <p className="text-5xl font-display font-black text-white">100k</p>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-purple mt-1">Happy Guests</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <div>
            <p className="text-5xl font-display font-black text-white">99%</p>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-cyan mt-1">Re-booking Rate</p>
          </div>
        </div>

      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800", alt: "Crowd Energy", size: "md:col-span-4" },
    { src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800", alt: "DJ Performance", size: "md:col-span-8" },
    { src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800", alt: "Gameshow Action", size: "md:col-span-6" },
    { src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=800", alt: "Nightlife Vibes", size: "md:col-span-6" },
    { src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800", alt: "Club Atmos", size: "md:col-span-12" }
  ];

  return (
    <section className="px-6 py-24 max-w-7xl mx-auto" id="gallery">
      <div className="mb-12">
        <h2 className="text-xs font-mono text-brand-cyan tracking-[0.3em] uppercase mb-2">Visual Vault</h2>
        <h3 className="text-5xl font-display font-black uppercase tracking-tighter">Caught in the Act</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${img.size} relative group`}
          >
            <div className="p-4 bg-white rounded-sm shadow-xl transform group-hover:rotate-1 group-hover:scale-[1.02] transition-all duration-500 overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="pt-4 pb-2 px-1">
                <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-1 italic">#{String(i + 1).padStart(3, '0')}</p>
                <p className="font-display font-bold text-black uppercase text-xs tracking-tight">{img.alt}</p>
              </div>
              {/* Retro Polish Effect Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/20 to-transparent mix-blend-overlay" />
            </div>
            {/* Shadow underneath */}
            <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/40 blur-2xl -z-10 group-hover:bg-black/60 transition-all" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ReviewSection = () => {
  const reviews = [
    { name: "Jessica R.", role: "Lead Coordinator", text: "The gameshow was UNBELIEVABLE. Our staff hasn't stopped talking about it. It felt like we were on a real TV set, but better.", provider: "GigSalad" },
    { name: "Robert M.", role: "Director of Ops", text: "Best tech setup we've ever hired. Everything was seamless, high energy, and genuinely hilarious. 10/10.", provider: "GigSalad" },
    { name: "Amanda T.", role: "Private Event", text: "If you want your guests to actually have fun and not just stand around—book them. Truly an 'IRL' experience.", provider: "GigSalad" }
  ];

  return (
    <section className="bg-deep-bg py-24 px-6 border-y border-white/5" id="reviews">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-xs font-mono text-brand-purple tracking-[0.3em] uppercase mb-2">Social Proof</h2>
            <h3 className="text-5xl font-display font-black uppercase tracking-tighter">GigSalad Reviews</h3>
          </div>
          <a 
            href="https://www.gigsalad.com/irl_interactive_events_westmont" 
            target="_blank" 
            className="group flex items-center gap-2 text-brand-cyan text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
          >
            Visit Profile <ExternalLink className="w-4 h-4" />
            <div className="h-[1px] w-0 group-hover:w-full bg-brand-cyan transition-all duration-300 ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-glass rounded-3xl border border-white/5 relative group"
            >
              <div className="flex gap-1 text-brand-cyan mb-6">
                {[1, 2, 3, 4, 5].map(j => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 font-light text-lg mb-8 leading-relaxed">"{rev.text}"</p>
              <div className="flex items-center justify-between border-t border-white/5 pt-6">
                <div>
                  <h4 className="font-bold uppercase text-brand-purple">{rev.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{rev.role}</p>
                </div>
                <div className="text-[10px] font-mono text-gray-600 uppercase italic">Verified {rev.provider}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InteractiveClearance = () => {
  const [step, setStep] = useState(0); // 0: Who, 1: Kind, 2: Type, 3: Form, 4: Success
  const [selections, setSelections] = useState({
    userType: '',
    eventFrequency: '',
    experienceType: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    {
      id: 'who',
      title: 'WHO ARE YOU?',
      subtitle: 'CLICK THE OPTION THAT BEST FITS YOU OR YOUR EVENT',
      options: [
        { label: 'VENUE', icon: <MapPin className="w-8 h-8" />, value: 'venue' },
        { label: 'PRIVATE PARTY', icon: <Music className="w-8 h-8" />, value: 'private' },
        { label: 'BUSINESS', icon: <Users className="w-8 h-8" />, value: 'business' },
        { label: 'CHARITY', icon: <Trophy className="w-8 h-8" />, value: 'charity' },
      ],
      tip: 'TIP: Identify your organization type to help us tailor our equipment and staffing clearances for your specific space.'
    },
    {
      id: 'kind',
      title: 'WHAT KIND OF EVENT?',
      subtitle: 'CLICK THE TITLE OF THE OPTION THAT BEST FITS YOU OR YOUR EVENT',
      options: [
        { label: 'ONE-OFF', icon: <Calendar className="w-8 h-8" />, value: 'one-off' },
        { label: 'WEEKLY', icon: <Zap className="w-8 h-8" />, value: 'weekly' },
        { label: 'CONCERTS', icon: <Music className="w-8 h-8" />, value: 'concerts' },
        { label: 'POP-UPS', icon: <ExternalLink className="w-8 h-8" />, value: 'pop-ups' },
      ],
      tip: 'TIP: If you\'re just looking to fill one date choose one-off. If you\'re wanting something to fill a slower weeknight on a consistent basis, click weekly.'
    },
    {
      id: 'type',
      title: 'WHAT TYPE OF EVENT?',
      subtitle: 'JACKPOTS | PRIZES • BIGGER AUDIENCES • THEMES | TICKETED',
      options: [
        { label: 'GSNL', sub: 'GAME SHOW NIGHT LIVE', value: 'gsnl', img: 'https://ais-pre-bksdbbo5vpt7t4aw2o3vbm-490606231621.europe-west2.run.app/input_file_6.png' },
        { label: 'HYBRID', sub: 'EVENTS & STREAMS', value: 'hybrid', img: 'https://ais-pre-bksdbbo5vpt7t4aw2o3vbm-490606231621.europe-west2.run.app/input_file_1.png' },
        { label: 'BADA BRUNCH', sub: 'THEMED EVENTS', value: 'bada', img: 'https://ais-pre-bksdbbo5vpt7t4aw2o3vbm-490606231621.europe-west2.run.app/input_file_4.png' },
        { label: 'WATER COOLER', sub: 'CORPORATE SPORTS', value: 'sports', img: 'https://ais-pre-bksdbbo5vpt7t4aw2o3vbm-490606231621.europe-west2.run.app/input_file_5.png' },
        { label: 'WEDDING', sub: 'IN-A-BOX', value: 'wedding', img: 'https://ais-pre-bksdbbo5vpt7t4aw2o3vbm-490606231621.europe-west2.run.app/input_file_2.png', sticker: '80% LOADED' },
      ],
      tip: 'TIP: Select your preferred experience brand. Each offers a unique protocol for audience engagement and atmosphere control.'
    }
  ];

  const handleSelect = (field: string, value: string) => {
    setSelections(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const handleFinalSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: selections.name,
          email: selections.email,
          phone: selections.phone,
          company: selections.company,
          userType: selections.userType,
          eventFrequency: selections.eventFrequency,
          experienceType: selections.experienceType,
          details: selections.details,
        }),
      });
    } catch (err) {
      console.error('Failed to submit lead:', err);
    } finally {
      setIsSubmitting(false);
      setStep(4);
    }
  };

  const startOver = () => {
    setStep(0);
    setSelections({
      userType: '',
      eventFrequency: '',
      experienceType: '',
      name: '',
      email: '',
      phone: '',
      company: '',
      details: ''
    });
  };

  return (
    <section className="py-24 px-6 relative min-h-[800px] flex flex-col items-center justify-center bg-deep-bg" id="tickets">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-brick-wall.png')] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
      
      <div className="w-full max-w-6xl z-10">
        
        {/* Header Navigation */}
        {step < 4 && (
          <div className="flex justify-between items-center mb-16 px-4">
            <button 
              onClick={() => setStep(prev => Math.max(0, prev - 1))}
              disabled={step === 0}
              className={`px-6 py-2 border-2 border-brand-cyan text-brand-cyan font-black uppercase tracking-widest rounded-sm skew-x-[-10deg] hover:bg-brand-cyan hover:text-black transition-all disabled:opacity-0`}
            >
              <span className="skew-x-[10deg] block">BACK</span>
            </button>
            <div className="flex flex-col items-center">
               <div className="w-12 h-12 bg-white/5 rounded-lg border border-brand-cyan/20 flex items-center justify-center mb-2">
                 <img src="https://ais-pre-bksdbbo5vpt7t4aw2o3vbm-490606231621.europe-west2.run.app/input_file_0.png" alt="Logo" className="w-8 h-8 object-contain" />
               </div>
               <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Clearance Protocol</span>
            </div>
            <button 
              onClick={startOver}
              className="px-6 py-2 border-2 border-brand-purple text-brand-purple font-black uppercase tracking-widest rounded-sm skew-x-[10deg] hover:bg-brand-purple hover:text-black transition-all"
            >
              <span className="skew-x-[-10deg] block">START OVER</span>
            </button>
          </div>
        )}

        <motion.div
           key={step}
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -20 }}
           className="text-center"
        >
          {step < 3 ? (
            <>
              <h2 className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter uppercase mb-2 leading-none">
                {steps[step].title}
              </h2>
              <p className="text-xs md:text-sm font-mono text-brand-cyan tracking-[0.2em] uppercase mb-16 opacity-80">
                {steps[step].subtitle}
              </p>

              <div className={`grid grid-cols-1 sm:grid-cols-2 ${steps[step].id === 'type' ? 'lg:grid-cols-5' : 'lg:grid-cols-4'} gap-4 px-4`}>
                {steps[step].id === 'type' ? (
                  // Custom rendering for Step 3 (The brands with images)
                  steps[step].options.map((opt, i: number) => (
                    <button
                      key={i}
                      onClick={() => handleSelect('experienceType', opt.value)}
                      className="bento-card border border-white/5 p-4 flex flex-col items-center justify-center gap-3 group cursor-pointer hover:bg-white/5 transition-all"
                    >
                      <div className="w-full aspect-square relative mb-2 overflow-hidden rounded-xl">
                        <img 
                          src={opt.img} 
                          alt={opt.label} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <span className="text-[10px] font-black text-brand-cyan uppercase tracking-widest">Select Mode</span>
                        </div>
                        {opt.sticker && (
                          <div className="absolute top-2 right-2 bg-brand-purple text-black text-[7px] font-black px-2 py-0.5 rounded-sm rotate-12 shadow-lg group-hover:scale-110 transition-transform">
                            {opt.sticker}
                          </div>
                        )}
                      </div>
                      <span className="text-sm font-display font-black text-white group-hover:text-brand-cyan transition-colors uppercase tracking-widest">{opt.label}</span>
                      <span className="text-[8px] font-mono text-gray-500 uppercase tracking-[0.2em]">{opt.sub}</span>
                    </button>
                  ))
                ) : (
                  // Standard rendering for Step 1 & 2
                  steps[step].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(step === 0 ? 'userType' : 'eventFrequency', opt.value)}
                      className="bento-card bg-white/5 border border-white/10 hover:border-brand-cyan p-10 flex flex-col items-center justify-center gap-6 group cursor-pointer transition-all hover:bg-brand-cyan/10"
                    >
                      <div className="text-brand-cyan group-hover:scale-125 transition-transform duration-500">
                        {opt.icon}
                      </div>
                      <span className="text-xl font-display font-black text-white uppercase tracking-tighter group-hover:text-brand-cyan">{opt.label}</span>
                      <div className="w-8 h-[2px] bg-white/10 group-hover:bg-brand-cyan transition-all" />
                    </button>
                  ))
                )}
              </div>

              <div className="mt-20 max-w-2xl mx-auto px-6 py-4 bg-brand-cyan/5 border border-brand-cyan/10 rounded-xl">
                 <p className="text-[10px] md:text-xs font-mono text-gray-400 uppercase leading-relaxed tracking-wide">
                   {steps[step].tip}
                 </p>
              </div>
            </>
          ) : step === 3 ? (
            <div className="max-w-xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter uppercase mb-4 leading-none">
                TRANSMIT DETAILS
              </h2>
              <p className="text-xs font-mono text-brand-purple tracking-[0.2em] uppercase mb-12 italic">
                Final step for Clearance Verification
              </p>

              <form onSubmit={handleFinalSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    required
                    type="text" 
                    placeholder="NAME / ALIAS"
                    className="w-full bg-black/50 border border-white/5 focus:border-brand-cyan/50 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 text-xs font-black tracking-widest focus:outline-none transition-all"
                    value={selections.name}
                    onChange={e => setSelections({...selections, name: e.target.value})}
                  />
                  <input 
                    required
                    type="email" 
                    placeholder="EMAIL ENCRYPTION"
                    className="w-full bg-black/50 border border-white/5 focus:border-brand-cyan/50 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 text-xs font-black tracking-widest focus:outline-none transition-all"
                    value={selections.email}
                    onChange={e => setSelections({...selections, email: e.target.value})}
                  />
                  <input 
                    required
                    type="tel" 
                    placeholder="SIGNAL (PHONE #)"
                    className="w-full bg-black/50 border border-white/5 focus:border-brand-cyan/50 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 text-xs font-black tracking-widest focus:outline-none transition-all"
                    value={selections.phone}
                    onChange={e => setSelections({...selections, phone: e.target.value})}
                  />
                  {(selections.userType === 'venue' || selections.userType === 'business') && (
                    <input 
                      required
                      type="text" 
                      placeholder="COMPANY / VENUE NAME"
                      className="w-full bg-black/50 border border-white/5 focus:border-brand-cyan/50 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 text-xs font-black tracking-widest focus:outline-none transition-all"
                      value={selections.company}
                      onChange={e => setSelections({...selections, company: e.target.value})}
                    />
                  )}
                </div>
                <textarea 
                  required
                  placeholder="EVENT SPECS / DATE / VISION"
                  rows={4}
                  className="w-full bg-black/50 border border-white/5 focus:border-brand-cyan/50 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 text-xs font-black tracking-widest focus:outline-none transition-all resize-none"
                  value={selections.details}
                  onChange={e => setSelections({...selections, details: e.target.value})}
                ></textarea>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 bg-brand-cyan text-black py-5 rounded-xl text-sm font-black tracking-[0.3em] uppercase hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-neon-cyan disabled:opacity-50"
                >
                  {isSubmitting ? 'ENCRYPTING...' : 'SECURE THE VIBE'}
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-20">
               <div className="w-24 h-24 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <Circle className="w-12 h-12 text-brand-cyan fill-current" />
               </div>
               <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter mb-4">SIGNAL SENT.</h2>
               <p className="text-xl text-gray-400 font-light max-w-md mx-auto mb-10">
                 Clearance is being processed. Our team will ping you back if you are cleared for the vibe.
               </p>
               <button 
                 onClick={startOver}
                 className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all"
               >
                 Start New Event
               </button>
            </div>
          )}
        </motion.div>

        {/* Decorative Grid overlay footer */}
        <div className="mt-24 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mt-4 flex justify-center gap-12 text-[10px] font-mono text-gray-600 uppercase tracking-widest italic">
           <span>Lat: 41.8344° N</span>
           <span>Long: 87.9723° W</span>
           <span>Status: Ready</span>
        </div>
      </div>
    </section>
  );
};


const Footer = () => (
  <footer className="px-6 py-20 border-t border-white/5 bg-black">
     <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
       <div>
         <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-cyan rounded-lg flex items-center justify-center font-bold text-black italic">IRL</div>
            <span className="font-display font-bold uppercase tracking-tighter">Interactive Events</span>
         </div>
         <p className="max-w-xs text-sm text-gray-500 leading-relaxed uppercase font-light tracking-wide">
           The underground standard for real human connection. Unfiltered gameshows, unscripted nights, and the energy you can't find online.
         </p>
       </div>
       
       <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
         <div>
           <h4 className="text-[10px] font-mono text-white tracking-[0.3em] uppercase mb-6">System</h4>
           <ul className="space-y-3 text-xs font-bold text-gray-500 uppercase tracking-widest">
             <li className="hover:text-brand-cyan cursor-pointer transition-colors">Shows</li>
             <li className="hover:text-brand-cyan cursor-pointer transition-colors">Pricing</li>
             <li className="hover:text-brand-cyan cursor-pointer transition-colors">Gallery</li>
           </ul>
         </div>
         <div>
           <h4 className="text-[10px] font-mono text-white tracking-[0.3em] uppercase mb-6">Support</h4>
           <ul className="space-y-3 text-xs font-bold text-gray-500 uppercase tracking-widest">
             <li className="hover:text-brand-purple cursor-pointer transition-colors">Contact</li>
             <li className="hover:text-brand-purple cursor-pointer transition-colors">FAQ</li>
             <li className="hover:text-brand-purple cursor-pointer transition-colors">Safety</li>
             <li><a href="/admin" className="hover:text-brand-cyan transition-colors">Admin</a></li>
           </ul>
         </div>
         <div className="col-span-2 sm:col-span-1">
           <h4 className="text-[10px] font-mono text-white tracking-[0.3em] uppercase mb-6">HQ</h4>
           <p className="text-xs text-gray-500 uppercase tracking-widest leading-loose">
             Westmont, IL<br/>
             Interactive HQ<br/>
             USA
           </p>
         </div>
       </div>
     </div>
     <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
       <p className="text-[10px] text-gray-600 font-mono uppercase">© 2024 IRL INTERACTIVE EVENTS. ALL RIGHTS RESERVED.</p>
       <div className="flex gap-6">
         <span className="text-[10px] text-gray-600 font-mono uppercase hover:text-brand-cyan cursor-pointer">Privacy</span>
         <span className="text-[10px] text-gray-600 font-mono uppercase hover:text-brand-cyan cursor-pointer">Terms</span>
       </div>
     </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-deep-bg text-white selection:bg-brand-cyan selection:text-black scroll-smooth">
      <Navbar />
      
      <main>
        <Hero />
        
        <BentoGrid />
        
        <section className="py-24 px-6 text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-8 bg-gradient-to-r from-brand-cyan via-white to-brand-purple bg-clip-text text-transparent"
          >
            Real people. <br/> Unreal energy.
          </motion.h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            We're the reason you finally put your phone down. Our floor is for the bold, the curious, and anyone tired of the same old night. 
            We build the bridge between the digital buzz and the person standing right in front of you. 
            No scripts, no fillers—just the electricity of being in the right room at the right time.
          </p>
        </section>

        <ReviewSection />
        
        <Gallery />
        
        <InteractiveClearance />
      </main>

      <Footer />
    </div>
  );
}
