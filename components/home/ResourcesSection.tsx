import { Card } from '@/components/ui/card';
import { FileText, Headphones, Download } from 'lucide-react';

const resources = [
  {
    icon: FileText,
    title: 'Study Guides',
    description: 'Comprehensive guides and notes for all subjects',
    count: '500+ Resources'
  },
  {
    icon: Headphones,
    title: 'Podcasts',
    description: 'Educational podcasts from industry experts',
    count: '100+ Episodes'
  },
  {
    icon: Download,
    title: 'Downloadables',
    description: 'Templates, worksheets, and practice materials',
    count: '1000+ Files'
  }
];

export function ResourcesSection() {
  // Temporarily hide Learning Resources section
  return null;
}

/*
 * Previous implementation kept for reference
 * 
 * const ResourcesSectionContent = () => {
 *   return (
 *     <section id="resources" className="w-full py-16 md:py-20 bg-white">
 *       <div className="max-w-7xl mx-auto px-6">
 *         <div className="text-center mb-12">
 *           <h2 className="text-4xl md:text-5xl font-bold text-[#D32F2F] mb-4">
 *             Learning Resources
 *           </h2>
 *           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
 *             Access a wealth of supplementary materials to enhance your learning experience
 *           </p>
 *         </div>
 * 
 *         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 *           {resources.map((resource, index) => {
 *             const Icon = resource.icon;
 *             return (
 *               <Card 
 *                 key={index}
 *                 className="p-10 bg-gradient-to-br from-[#D32F2F] to-[#8B1A1A] text-white border-none hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden relative"
 *               >
 *                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
 *                 <div className="relative z-10">
 *                   <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
 *                     <Icon className="w-8 h-8 text-white" />
 *                   </div>
 *                   <h3 className="text-2xl font-bold mb-3">
 *                     {resource.title}
 *                   </h3>
 *                   <p className="text-white/90 mb-4 leading-relaxed">
 *                     {resource.description}
 *                   </p>
 *                   <div className="text-xl font-bold">
 *                     {resource.count}
 *                   </div>
 *                 </div>
 *               </Card>
 *             );
 *           })}
 *         </div>
 *       </div>
 *     </section>
 *   );
 * }
 */
