import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, FolderGit2, Rocket, UserPlus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const highlights = [
  {
    icon: FolderGit2,
    title: 'Ship real work',
    body: 'Weekend experiments, hackathon builds, and open-source contributions deserve a home.',
  },
  {
    icon: Code2,
    title: 'Show your craft',
    body: 'Link GitHub repos, live demos, and portfolio projects so mentors can see how you build.',
  },
  {
    icon: Rocket,
    title: 'Get discovered',
    body: 'Stand out in the community leaderboard and get spotted for missions and collaborations.',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white text-slate-950 flex flex-col">
      <Navbar dark={false} />

      <main className="flex-grow pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 mb-6"
          >
            <Code2 className="w-4 h-4 text-red-600" />
            <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.3em]">Project Showcase</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6 leading-none"
          >
            BUILD <span className="text-red-600">IN PUBLIC</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto font-medium leading-relaxed"
          >
            The full project gallery is launching soon. For now, add your portfolio links to your operative dossier and join a mission to ship something real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Button asChild className="h-12 rounded-2xl bg-red-600 hover:bg-red-700 font-black uppercase tracking-widest text-[11px] px-8">
              <Link to="/edit-profile">Add Portfolio Links <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-2xl font-black uppercase tracking-widest text-[11px] px-8">
              <Link to="/events">Join a Mission</Link>
            </Button>
            <Button asChild variant="ghost" className="h-12 rounded-2xl font-black uppercase tracking-widest text-[11px] px-8 text-slate-500">
              <Link to="/signup"><UserPlus className="w-4 h-4 mr-2" />Create Profile</Link>
            </Button>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-red-600 mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-3">{item.title}</h2>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}