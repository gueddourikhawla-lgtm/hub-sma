import React, { useState } from 'react';
import { 
  BookOpen, Cpu, Layers, Terminal, MessageSquare, Sparkles, Network, 
  BrainCircuit, Activity, Bot, Share2, Database, Cog, Wifi, Zap, Eye, 
  GitBranch, Workflow, Boxes, ChevronRight, ArrowRight, RefreshCw, 
  Circle, Square, Triangle, Globe, Users, Target, Settings, Server, 
  MessageCircle, CheckCircle, Shield, Factory, Car, Building2, Satellite, 
  GitMerge, Timer, Power, Pause, Play, AlertCircle, Image as ImageIcon
} from 'lucide-react';

const chapters = [
  {
    id: 1,
    short: "I. Intro",
    title: "Introduction aux Systèmes Multi-Agents",
    icon: BookOpen,
    color: "from-indigo-600 to-violet-900",
    border: "border-indigo-500/30",
    coverImage: "1780677571.png",
    content: {
      subtitle: "De l'IA classique à l'Intelligence Collective (DAI)",
      sections: [
        {
          title: "Contexte de l'Intelligence Artificielle Distribuée",
          text: "L'Intelligence Artificielle Distribuée (DAI) est une branche de l'intelligence artificielle qui étudie la résolution de problèmes à travers plusieurs entités intelligentes coopérant au sein d'un même environnement.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-indigo-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Network className="w-5 h-5 text-indigo-400"/>
                <span className="text-sm font-bold text-indigo-400 tracking-wider uppercase">Positionnement de la DAI</span>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg text-center">
                  <div className="flex items-center justify-center gap-2">
                    <BrainCircuit className="w-5 h-5 text-indigo-400"/>
                    <span className="text-sm font-bold text-indigo-300">INTELLIGENCE ARTIFICIELLE</span>
                  </div>
                </div>
                <div className="flex justify-center"><div className="w-0.5 h-6 bg-indigo-500/50"></div></div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-cyan-400"/>
                      <span className="text-xs font-bold text-cyan-300">IA Symbolique</span>
                    </div>
                    <p className="text-[9px] text-slate-400">Règles & Logique</p>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Workflow className="w-4 h-4 text-purple-400"/>
                      <span className="text-xs font-bold text-purple-300">IA Connexionniste</span>
                    </div>
                    <p className="text-[9px] text-slate-400">Réseaux de Neurones</p>
                  </div>
                </div>
                <div className="flex justify-center"><div className="w-0.5 h-6 bg-indigo-500/50"></div></div>
                <div className="p-4 bg-gradient-to-r from-indigo-950/40 to-purple-950/40 border-2 border-indigo-500/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Network className="w-5 h-5 text-indigo-400"/>
                    <span className="text-sm font-bold text-indigo-300">IA Distribuée (DAI)</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="p-2 bg-slate-900/50 rounded text-center">
                      <Users className="w-4 h-4 text-indigo-400 mx-auto mb-1"/>
                      <span className="text-[8px] text-indigo-300">Multi-Agents</span>
                    </div>
                    <div className="p-2 bg-slate-900/50 rounded text-center">
                      <Share2 className="w-4 h-4 text-purple-400 mx-auto mb-1"/>
                      <span className="text-[8px] text-purple-300">Coopération</span>
                    </div>
                    <div className="p-2 bg-slate-900/50 rounded text-center">
                      <Target className="w-4 h-4 text-cyan-400 mx-auto mb-1"/>
                      <span className="text-[8px] text-cyan-300">Objectifs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Évolution de l'IA",
          text: "L'intelligence artificielle a évolué de l'IA symbolique basée sur les règles vers l'IA connexionniste fondée sur les réseaux de neurones et le Deep Learning. Cette évolution a conduit à l'émergence de l'IA distribuée.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-indigo-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <GitBranch className="w-5 h-5 text-indigo-400"/>
                <span className="text-sm font-bold text-indigo-400 tracking-wider uppercase">Timeline de l'Évolution</span>
              </div>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500"></div>
                <div className="space-y-4">
                  {[
                    { year: '1950', title: 'IA Symbolique', desc: 'Règles logiques, systèmes experts', color: 'indigo', icon: BookOpen },
                    { year: '1980', title: 'IA Connexionniste', desc: 'Réseaux de neurones, ML', color: 'purple', icon: Workflow },
                    { year: '2010', title: 'Deep Learning', desc: 'CNN, Transformers, Big Data', color: 'cyan', icon: BrainCircuit },
                    { year: '2020', title: 'IA Distribuée & Agents', desc: 'MAS, Agentic AI, LLM', color: 'emerald', icon: Network }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-${item.color}-900/60 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-${item.color}-500/50`}>
                        <span className={`text-xs font-bold text-${item.color}-300`}>{item.year}</span>
                      </div>
                      <div className={`flex-1 p-3 bg-slate-900 rounded-lg border border-${item.color}-500/30`}>
                        <div className="flex items-center gap-2 mb-1">
                          <item.icon className={`w-4 h-4 text-${item.color}-400`}/>
                          <span className={`text-xs font-bold text-${item.color}-300`}>{item.title}</span>
                        </div>
                        <p className="text-[9px] text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Définition d'un Système Multi-Agents",
          text: "Un Système Multi-Agents (SMA) est un ensemble d'agents autonomes interagissant dans un environnement commun afin d'atteindre des objectifs individuels ou collectifs.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-indigo-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-indigo-400"/>
                <span className="text-sm font-bold text-indigo-400 tracking-wider uppercase">Anatomie d'un SMA</span>
              </div>
              <div className="p-5 bg-gradient-to-br from-indigo-950/20 to-purple-950/20 border-2 border-dashed border-indigo-500/30 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-indigo-400"/>
                    <span className="text-xs font-bold text-indigo-300">ENVIRONNEMENT COMMUN</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {['A', 'B', 'C'].map((letter, i) => (
                    <div key={i} className="p-3 bg-slate-900 rounded-lg border border-indigo-500/30 space-y-2">
                      <div className="w-10 h-10 bg-indigo-900/60 rounded-full flex items-center justify-center mx-auto">
                        <Bot className="w-5 h-5 text-indigo-400"/>
                      </div>
                      <span className="text-xs font-bold text-indigo-300 block text-center">Agent {letter}</span>
                      <div className="space-y-1">
                        <div className="p-1 bg-slate-800 rounded text-[8px] text-slate-400 flex items-center gap-1">
                          <Eye className="w-2.5 h-2.5"/> Perçoit
                        </div>
                        <div className="p-1 bg-slate-800 rounded text-[8px] text-slate-400 flex items-center gap-1">
                          <BrainCircuit className="w-2.5 h-2.5"/> Décide
                        </div>
                        <div className="p-1 bg-slate-800 rounded text-[8px] text-slate-400 flex items-center gap-1">
                          <Zap className="w-2.5 h-2.5"/> Agit
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center gap-3 pt-3 border-t border-indigo-500/20">
                  <div className="flex items-center gap-1 px-2 py-1 bg-indigo-950/40 rounded text-[8px] text-indigo-300">
                    <MessageCircle className="w-3 h-3"/> Communication
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-purple-950/40 rounded text-[8px] text-purple-300">
                    <Share2 className="w-3 h-3"/> Coopération
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-cyan-950/40 rounded text-[8px] text-cyan-300">
                    <GitMerge className="w-3 h-3"/> Coordination
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Pourquoi distribuer l'intelligence ?",
          text: "La distribution de l'intelligence améliore la robustesse, la scalabilité et la tolérance aux pannes. Plusieurs agents peuvent collaborer pour résoudre des problèmes complexes.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-indigo-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-indigo-400"/>
                <span className="text-sm font-bold text-indigo-400 tracking-wider uppercase">Centralisé vs Distribué</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-red-950/20 border border-red-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-4 h-4 text-red-400"/>
                    <span className="text-xs font-bold text-red-300">Centralisé</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-red-900/40 rounded-lg flex items-center justify-center mb-2">
                      <Cpu className="w-8 h-8 text-red-400"/>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center">
                          <Bot className="w-3 h-3 text-slate-500"/>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <div className="p-1.5 bg-red-950/40 rounded text-[8px] text-red-300">✗ Point de défaillance unique</div>
                    <div className="p-1.5 bg-red-950/40 rounded text-[8px] text-red-300">✗ Goulot d'étranglement</div>
                  </div>
                </div>
                <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400"/>
                    <span className="text-xs font-bold text-emerald-300">SMA Distribué</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} className="p-1.5 bg-emerald-900/30 rounded border border-emerald-500/30 flex flex-col items-center">
                        <Bot className="w-4 h-4 text-emerald-400 mb-0.5"/>
                        <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 space-y-1">
                    <div className="p-1.5 bg-emerald-950/40 rounded text-[8px] text-emerald-300">✓ Pas de SPOF</div>
                    <div className="p-1.5 bg-emerald-950/40 rounded text-[8px] text-emerald-300">✓ Charge répartie</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Robustesse', desc: 'Tolérance aux pannes', color: 'indigo', icon: Shield },
                  { label: 'Scalabilité', desc: 'Ajout facile d\'agents', color: 'purple', icon: GitBranch },
                  { label: 'Performance', desc: 'Traitement parallèle', color: 'cyan', icon: Zap },
                  { label: 'Collaboration', desc: 'Résolution collective', color: 'emerald', icon: Users }
                ].map((item, i) => (
                  <div key={i} className={`p-3 bg-${item.color}-950/30 border border-${item.color}-500/30 rounded-lg`}>
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className={`w-4 h-4 text-${item.color}-400`}/>
                      <span className={`text-xs font-bold text-${item.color}-300`}>{item.label}</span>
                    </div>
                    <p className="text-[9px] text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
        {
          title: "Applications des SMA",
          text: "Les SMA sont utilisés dans la robotique collaborative, l'Internet des Objets (IoT), les véhicules autonomes, les smart cities, les systèmes de transport intelligents et les réseaux de capteurs.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-indigo-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Boxes className="w-5 h-5 text-indigo-400"/>
                <span className="text-sm font-bold text-indigo-400 tracking-wider uppercase">Domaines d'Application</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Bot, label: 'Robotique Collaborative', desc: 'Cobots en usine', color: 'indigo' },
                  { icon: Wifi, label: 'Internet des Objets', desc: 'Smart Home, Industry 4.0', color: 'cyan' },
                  { icon: Car, label: 'Véhicules Autonomes', desc: 'Conduite intelligente', color: 'purple' },
                  { icon: Building2, label: 'Smart Cities', desc: 'Villes intelligentes', color: 'emerald' },
                  { icon: GitMerge, label: 'Transport Intelligent', desc: 'ITS - Smart Mobility', color: 'amber' },
                  { icon: Satellite, label: 'Réseaux de Capteurs', desc: 'WSN - Monitoring', color: 'rose' }
                ].map((app, i) => (
                  <div key={i} className={`p-4 bg-${app.color}-950/30 border border-${app.color}-500/30 rounded-lg`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-10 h-10 bg-${app.color}-900/60 rounded-lg flex items-center justify-center`}>
                        <app.icon className={`w-5 h-5 text-${app.color}-400`}/>
                      </div>
                      <div>
                        <span className={`text-xs font-bold text-${app.color}-300`}>{app.label}</span>
                        <p className="text-[8px] text-slate-400">{app.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
        {
          title: "Caractéristiques générales des SMA",
          text: "Les SMA se caractérisent par l'autonomie, la communication, la coopération, la coordination, la distribution du contrôle et l'adaptation à un environnement dynamique.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-indigo-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-indigo-400"/>
                <span className="text-sm font-bold text-indigo-400 tracking-wider uppercase">6 Caractéristiques Clés</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Shield, label: 'Autonomie', desc: 'Décisions sans contrôle externe', color: 'indigo' },
                  { icon: MessageCircle, label: 'Communication', desc: 'Échange d\'informations', color: 'cyan' },
                  { icon: Users, label: 'Coopération', desc: 'Travail vers un but commun', color: 'emerald' },
                  { icon: GitMerge, label: 'Coordination', desc: 'Organisation des actions', color: 'purple' },
                  { icon: Network, label: 'Distribution', desc: 'Contrôle décentralisé', color: 'amber' },
                  { icon: RefreshCw, label: 'Adaptation', desc: 'Réponse au changement', color: 'rose' }
                ].map((char, i) => (
                  <div key={i} className={`p-4 bg-${char.color}-950/30 border border-${char.color}-500/30 rounded-lg`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 bg-${char.color}-900/60 rounded-lg flex items-center justify-center`}>
                        <char.icon className={`w-5 h-5 text-${char.color}-400`}/>
                      </div>
                      <div>
                        <span className={`text-sm font-bold text-${char.color}-300`}>{char.label}</span>
                        <p className="text-[8px] text-slate-400">#{i + 1}</p>
                      </div>
                    </div>
                    <p className="text-[9px] text-slate-400">{char.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ),
        }
      ],
      schema: (
        <div className="w-full bg-slate-900/80 p-6 rounded-xl border border-indigo-500/20">
          <p className="text-sm font-bold text-indigo-400 mb-4 text-center tracking-widest uppercase">Hiérarchie de l'IA</p>
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-sm">IA Classique</div>
            <div className="text-indigo-400">↓</div>
            <div className="px-4 py-2 bg-indigo-900/30 border border-indigo-500/40 rounded-lg text-sm">IA Distribuée (DAI)</div>
            <div className="text-indigo-400">↓</div>
            <div className="px-4 py-2 bg-cyan-900/30 border border-cyan-500/40 rounded-lg text-sm">Systèmes Multi-Agents</div>
            <div className="text-indigo-400">↓</div>
            <div className="px-4 py-2 bg-emerald-900/30 border border-emerald-500/40 rounded-lg text-sm">Applications Réelles</div>
          </div>
        </div>
      ),
    }
  },
  {
    id: 2,
    short: "II. Agents",
    title: "Caractéristiques des Agents",
    icon: Cpu,
    color: "from-amber-600 to-orange-900",
    border: "border-amber-500/30",
    coverImage: "1780678093.png",
    content: {
      subtitle: "Autonomie, Perception et Action dans le monde physique",
      sections: [
        {
          title: "Définition Formelle",
          text: "Un agent est une entité physique ou logicielle capable de percevoir son environnement, de prendre des décisions de manière autonome et d'agir afin d'atteindre des objectifs spécifiques.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-amber-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Bot className="w-5 h-5 text-amber-400"/>
                <span className="text-sm font-bold text-amber-400 tracking-wider uppercase">Anatomie d'un Agent</span>
              </div>
              <div className="p-6 bg-gradient-to-br from-amber-950/30 to-orange-950/30 border-2 border-amber-500/30 rounded-xl">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-amber-900/60 rounded-full flex items-center justify-center border-4 border-amber-500/50">
                    <Bot className="w-10 h-10 text-amber-400"/>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-cyan-950/30 border border-cyan-500/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-4 h-4 text-cyan-400"/>
                      <span className="text-xs font-bold text-cyan-300">Capteurs</span>
                    </div>
                    <div className="space-y-1">
                      <div className="p-1 bg-slate-900 rounded text-[8px] text-slate-400"> Caméras</div>
                      <div className="p-1 bg-slate-900 rounded text-[8px] text-slate-400">🎤 Capteurs</div>
                    </div>
                  </div>
                  <div className="p-3 bg-purple-950/30 border border-purple-500/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <BrainCircuit className="w-4 h-4 text-purple-400"/>
                      <span className="text-xs font-bold text-purple-300">Cerveau</span>
                    </div>
                    <div className="space-y-1">
                      <div className="p-1 bg-slate-900 rounded text-[8px] text-slate-400">🧠 Raisonnement</div>
                      <div className="p-1 bg-slate-900 rounded text-[8px] text-slate-400">💾 Mémoire</div>
                    </div>
                  </div>
                  <div className="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-emerald-400"/>
                      <span className="text-xs font-bold text-emerald-300">Actionneurs</span>
                    </div>
                    <div className="space-y-1">
                      <div className="p-1 bg-slate-900 rounded text-[8px] text-slate-400">⚙️ Moteurs</div>
                      <div className="p-1 bg-slate-900 rounded text-[8px] text-slate-400">💬 Messages</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-700">
                <div className="text-center flex-1">
                  <Eye className="w-5 h-5 text-cyan-400 mx-auto mb-1"/>
                  <span className="text-[9px] font-bold text-cyan-300">Percevoir</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-500"/>
                <div className="text-center flex-1">
                  <BrainCircuit className="w-5 h-5 text-purple-400 mx-auto mb-1"/>
                  <span className="text-[9px] font-bold text-purple-300">Penser</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-500"/>
                <div className="text-center flex-1">
                  <Zap className="w-5 h-5 text-emerald-400 mx-auto mb-1"/>
                  <span className="text-[9px] font-bold text-emerald-300">Agir</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Autonomie",
          text: "L'agent fonctionne sans intervention humaine permanente. Il contrôle ses propres actions et prend ses décisions en fonction de ses connaissances et objectifs.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-amber-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-amber-400"/>
                <span className="text-sm font-bold text-amber-400 tracking-wider uppercase">Niveaux d'Autonomie</span>
              </div>
              <div className="space-y-3">
                {[
                  { level: 'Niveau 1', label: 'Téléopéré', desc: 'Humain contrôle tout', color: 'red' },
                  { level: 'Niveau 2', label: 'Assisté', desc: 'Humain + Agent', color: 'amber' },
                  { level: 'Niveau 3', label: 'Semi-autonome', desc: 'Agent avec supervision', color: 'cyan' },
                  { level: 'Niveau 4', label: 'Hautement autonome', desc: 'Agent décide, humain supervise', color: 'emerald' },
                  { level: 'Niveau 5', label: 'Totalement autonome', desc: 'Agent indépendant', color: 'purple' }
                ].map((item, i) => (
                  <div key={i} className={`p-3 bg-${item.color}-950/20 border border-${item.color}-500/30 rounded-lg`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-${item.color}-900/60 rounded-lg flex items-center justify-center`}>
                        <span className="text-lg font-bold text-${item.color}-300">{i+1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-xs font-bold text-${item.color}-300`}>{item.level}: {item.label}</span>
                        </div>
                        <p className="text-[9px] text-slate-400">{item.desc}</p>
                        <div className="mt-2 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div className={`h-full bg-${item.color}-500 rounded-full`} style={{ width: `${(i+1) * 20}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
        {
          title: "Perception",
          text: "Grâce à ses capteurs ou sources d'information, l'agent collecte des données sur son environnement afin de comprendre la situation dans laquelle il évolue.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-amber-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-amber-400"/>
                <span className="text-sm font-bold text-amber-400 tracking-wider uppercase">Système de Perception</span>
              </div>
              <div className="p-4 bg-blue-950/20 border border-blue-500/30 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-blue-400"/>
                  <span className="text-xs font-bold text-blue-300">Environnement</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="p-2 bg-slate-900 rounded text-center">
                    <div className="text-xl mb-1">🌡️</div>
                    <span className="text-[8px] text-slate-400">Température</span>
                  </div>
                  <div className="p-2 bg-slate-900 rounded text-center">
                    <div className="text-xl mb-1">👁️</div>
                    <span className="text-[8px] text-slate-400">Vision</span>
                  </div>
                  <div className="p-2 bg-slate-900 rounded text-center">
                    <div className="text-xl mb-1">🔊</div>
                    <span className="text-[8px] text-slate-400">Son</span>
                  </div>
                  <div className="p-2 bg-slate-900 rounded text-center">
                    <div className="text-xl mb-1"></div>
                    <span className="text-[8px] text-slate-400">Position</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-amber-500/50"></div>
                  <div className="px-3 py-1 bg-amber-950/40 rounded-full border border-amber-500/30">
                    <span className="text-[9px] text-amber-300 font-bold">CAPTEURS</span>
                  </div>
                  <div className="w-0.5 h-6 bg-amber-500/50"></div>
                </div>
              </div>
              <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-lg">
                <div className="space-y-2">
                  {[
                    { num: '1', label: 'Acquisition', desc: 'Collecte des données brutes', color: 'cyan' },
                    { num: '2', label: 'Filtrage', desc: 'Suppression du bruit', color: 'purple' },
                    { num: '3', label: 'Interprétation', desc: 'Compréhension du contexte', color: 'emerald' }
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-slate-900 rounded">
                      <div className={`w-6 h-6 bg-${step.color}-900/60 rounded flex items-center justify-center`}>
                        <span className="text-xs">{step.num}</span>
                      </div>
                      <div className="flex-1">
                        <span className={`text-[9px] font-bold text-${step.color}-300`}>{step.label}</span>
                        <p className="text-[8px] text-slate-400">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Action",
          text: "L'agent agit sur son environnement à l'aide d'actionneurs physiques ou d'opérations logicielles afin de modifier son état ou celui de son environnement.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-amber-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-amber-400"/>
                <span className="text-sm font-bold text-amber-400 tracking-wider uppercase">Système d'Action</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Cog className="w-4 h-4 text-emerald-400"/>
                    <span className="text-xs font-bold text-emerald-300">Actionneurs Physiques</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2 bg-slate-900 rounded flex items-center gap-2">
                      <span className="text-xl">⚙️</span>
                      <div>
                        <span className="text-[9px] font-bold text-slate-300 block">Moteurs</span>
                        <span className="text-[8px] text-slate-400">Déplacement</span>
                      </div>
                    </div>
                    <div className="p-2 bg-slate-900 rounded flex items-center gap-2">
                      <span className="text-xl">🦾</span>
                      <div>
                        <span className="text-[9px] font-bold text-slate-300 block">Bras robotiques</span>
                        <span className="text-[8px] text-slate-400">Manipulation</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-blue-950/20 border border-blue-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal className="w-4 h-4 text-blue-400"/>
                    <span className="text-xs font-bold text-blue-300">Actions Logicielles</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2 bg-slate-900 rounded flex items-center gap-2">
                      <span className="text-xl"></span>
                      <div>
                        <span className="text-[9px] font-bold text-slate-300 block">Messages</span>
                        <span className="text-[8px] text-slate-400">Communication ACL</span>
                      </div>
                    </div>
                    <div className="p-2 bg-slate-900 rounded flex items-center gap-2">
                      <span className="text-xl">🌐</span>
                      <div>
                        <span className="text-[9px] font-bold text-slate-300 block">Appels API</span>
                        <span className="text-[8px] text-slate-400">Services externes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                      <BrainCircuit className="w-6 h-6 text-purple-400"/>
                    </div>
                    <span className="text-[9px] font-bold text-purple-300">Décision</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-amber-500"/>
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 bg-amber-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                      <Zap className="w-6 h-6 text-amber-400"/>
                    </div>
                    <span className="text-[9px] font-bold text-amber-300">Exécution</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-amber-500"/>
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                      <Globe className="w-6 h-6 text-emerald-400"/>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-300">Impact</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Communication",
          text: "Les agents peuvent échanger des informations, coopérer ou négocier avec d'autres agents afin de résoudre collectivement des problèmes complexes.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-amber-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 text-amber-400"/>
                <span className="text-sm font-bold text-amber-400 tracking-wider uppercase">Modes de Communication</span>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-cyan-950/20 border border-cyan-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="w-4 h-4 text-cyan-400"/>
                    <span className="text-xs font-bold text-cyan-300">Communication Directe</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-cyan-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                        <Bot className="w-6 h-6 text-cyan-400"/>
                      </div>
                      <span className="text-[9px] text-cyan-300">Agent A</span>
                    </div>
                    <div className="flex-1 mx-2 relative">
                      <div className="h-0.5 bg-cyan-500/50"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 bg-cyan-950/60 rounded text-[8px] text-cyan-300">
                        Message →
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                        <Bot className="w-6 h-6 text-purple-400"/>
                      </div>
                      <span className="text-[9px] text-purple-300">Agent B</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-purple-950/20 border border-purple-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Share2 className="w-4 h-4 text-purple-400"/>
                    <span className="text-xs font-bold text-purple-300">Communication Indirecte (Stigmergie)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                        <Bot className="w-6 h-6 text-purple-400"/>
                      </div>
                      <span className="text-[9px] text-purple-300">Agent A</span>
                    </div>
                    <div className="flex-1 mx-2">
                      <div className="p-2 bg-amber-950/30 border border-amber-500/30 rounded text-center">
                        <span className="text-[8px] text-amber-300">🌍 Environnement</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                        <Bot className="w-6 h-6 text-emerald-400"/>
                      </div>
                      <span className="text-[9px] text-emerald-300">Agent B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Les 3 Dimensions (EIO)",
          text: "• Environnement : espace d'évolution de l'agent.\n\n• Interaction : échanges avec les autres agents.\n\n• Organisation : structure et coordination du système multi-agents.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-amber-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-amber-400"/>
                <span className="text-sm font-bold text-amber-400 tracking-wider uppercase">Modèle EIO</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 bg-cyan-950/20 border border-cyan-500/30 rounded-lg">
                  <div className="w-12 h-12 bg-cyan-900/60 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Globe className="w-6 h-6 text-cyan-400"/>
                  </div>
                  <span className="text-xs font-bold text-cyan-300 block text-center mb-2">Environnement</span>
                  <div className="space-y-1">
                    <div className="p-1.5 bg-slate-900 rounded text-[8px] text-slate-400">🌍 Espace physique</div>
                    <div className="p-1.5 bg-slate-900 rounded text-[8px] text-slate-400">📊 Ressources</div>
                  </div>
                </div>
                <div className="p-4 bg-purple-950/20 border border-purple-500/30 rounded-lg">
                  <div className="w-12 h-12 bg-purple-900/60 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Share2 className="w-6 h-6 text-purple-400"/>
                  </div>
                  <span className="text-xs font-bold text-purple-300 block text-center mb-2">Interaction</span>
                  <div className="space-y-1">
                    <div className="p-1.5 bg-slate-900 rounded text-[8px] text-slate-400"> Communication</div>
                    <div className="p-1.5 bg-slate-900 rounded text-[8px] text-slate-400">🤝 Coopération</div>
                  </div>
                </div>
                <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                  <div className="w-12 h-12 bg-emerald-900/60 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Network className="w-6 h-6 text-emerald-400"/>
                  </div>
                  <span className="text-xs font-bold text-emerald-300 block text-center mb-2">Organisation</span>
                  <div className="space-y-1">
                    <div className="p-1.5 bg-slate-900 rounded text-[8px] text-slate-400">🏗️ Structure</div>
                    <div className="p-1.5 bg-slate-900 rounded text-[8px] text-slate-400"> Rôles</div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-amber-950/30 border-2 border-amber-500/50 rounded-lg">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-16 h-16 bg-amber-900/60 rounded-full flex items-center justify-center">
                    <Bot className="w-8 h-8 text-amber-400"/>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-bold text-amber-300 block mb-1">Agent au centre du modèle EIO</span>
                    <p className="text-[9px] text-slate-400">L'agent évolue dans un Environnement, Interagit avec d'autres agents, selon une Organisation définie</p>
                  </div>
                </div>
              </div>
            </div>
          ),
        }
      ],
      schema: (
        <div className="flex flex-col items-center justify-center p-6 bg-slate-900/80 rounded-xl border border-amber-500/20">
          <p className="text-sm font-bold text-amber-500 mb-6 tracking-widest uppercase">Cycle de Vie d'un Agent</p>
          <div className="relative w-80 h-80 flex items-center justify-center">
            <div className="absolute inset-8 rounded-full border-2 border-amber-500/40"></div>
            <div className="absolute w-28 h-28 rounded-full bg-slate-800 border-2 border-amber-500 flex flex-col items-center justify-center shadow-lg">
              <Bot className="w-10 h-10 text-amber-400 mb-1" />
              <span className="text-xs font-bold text-amber-200">Agent</span>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-cyan-900/20 border border-cyan-500 flex flex-col items-center justify-center">
              <Eye className="w-8 h-8 text-cyan-400"/>
              <span className="text-xs text-cyan-300">Perception</span>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-yellow-900/20 border border-yellow-500 flex flex-col items-center justify-center">
              <BrainCircuit className="w-8 h-8 text-yellow-400"/>
              <span className="text-xs text-yellow-300">Décision</span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-green-900/20 border border-green-500 flex flex-col items-center justify-center">
              <Zap className="w-8 h-8 text-green-400"/>
              <span className="text-xs text-green-300">Action</span>
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-purple-900/20 border border-purple-500 flex flex-col items-center justify-center">
              <Globe className="w-8 h-8 text-purple-400"/>
              <span className="text-xs text-purple-300">Environnement</span>
            </div>
          </div>
        </div>
      )
    }
  },
  {
    id: 3,
    short: "III. Types",
    title: "Types et Architectures des Agents",
    icon: Layers,
    color: "from-cyan-600 to-purple-900",
    border: "border-cyan-500/30",
    coverImage: "1780678475.png",
    content: {
      subtitle: "Classification des agents selon leur niveau d'intelligence et de décision",
      sections: [
        {
          title: "Agents Réactifs",
          text: "Les agents réactifs fonctionnent selon un modèle simple stimulus → réponse. Ils ne possèdent pas de mémoire interne ni de représentation du monde. Leur comportement est rapide mais limité aux situations immédiates.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-cyan-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-cyan-400"/>
                <span className="text-sm font-bold text-cyan-400 tracking-wider uppercase">Agent Réactif</span>
              </div>
              <div className="p-5 bg-gradient-to-br from-cyan-950/20 to-blue-950/20 border-2 border-cyan-500/30 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center flex-1">
                    <div className="w-16 h-16 bg-cyan-900/40 rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-cyan-500/50">
                      <Eye className="w-8 h-8 text-cyan-400"/>
                    </div>
                    <span className="text-xs font-bold text-cyan-300">STIMULUS</span>
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 bg-slate-900 rounded text-[8px] text-purple-300 font-bold">IF-THEN</div>
                    </div>
                  </div>
                  <div className="text-center flex-1">
                    <div className="w-16 h-16 bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-emerald-500/50">
                      <Zap className="w-8 h-8 text-emerald-400"/>
                    </div>
                    <span className="text-xs font-bold text-emerald-300">RÉPONSE</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-cyan-400"/>
                    <span className="text-xs font-bold text-cyan-300">Base de Règles</span>
                  </div>
                  <div className="space-y-1">
                    <div className="p-1.5 bg-slate-800 rounded text-[9px] font-mono text-cyan-300">IF temp &gt; 30°C THEN clim()</div>
                    <div className="p-1.5 bg-slate-800 rounded text-[9px] font-mono text-cyan-300">IF obstacle THEN turn()</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 bg-green-950/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center gap-1 mb-1">
                    <CheckCircle className="w-3 h-3 text-green-400"/>
                    <span className="text-[9px] font-bold text-green-300">Avantages</span>
                  </div>
                  <div className="space-y-1 text-[8px] text-slate-400">
                    <div>✓ Très rapide</div>
                    <div>✓ Simple à implémenter</div>
                  </div>
                </div>
                <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-lg">
                  <div className="flex items-center gap-1 mb-1">
                    <AlertCircle className="w-3 h-3 text-red-400"/>
                    <span className="text-[9px] font-bold text-red-300">Limites</span>
                  </div>
                  <div className="space-y-1 text-[8px] text-slate-400">
                    <div>✗ Pas de mémoire</div>
                    <div>✗ Pas de planification</div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Agents avec État (Stateful Agents)",
          text: "Ces agents disposent d'une mémoire interne leur permettant de conserver des informations sur l'environnement. Cela leur permet de gérer des environnements partiellement observables et d'adapter leurs actions dans le temps.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-blue-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Database className="w-5 h-5 text-blue-400"/>
                <span className="text-sm font-bold text-blue-400 tracking-wider uppercase">Agent avec État</span>
              </div>
              <div className="p-5 bg-gradient-to-br from-blue-950/20 to-indigo-950/20 border-2 border-blue-500/30 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center flex-1">
                    <div className="w-14 h-14 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                      <Eye className="w-7 h-7 text-blue-400"/>
                    </div>
                    <span className="text-[9px] font-bold text-blue-300">Perception</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-500"/>
                  <div className="text-center flex-1">
                    <div className="w-14 h-14 bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                      <Database className="w-7 h-7 text-purple-400"/>
                    </div>
                    <span className="text-[9px] font-bold text-purple-300">Mémoire</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-500"/>
                  <div className="text-center flex-1">
                    <div className="w-14 h-14 bg-amber-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                      <BrainCircuit className="w-7 h-7 text-amber-400"/>
                    </div>
                    <span className="text-[9px] font-bold text-amber-300">Décision</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-500"/>
                  <div className="text-center flex-1">
                    <div className="w-14 h-14 bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                      <Zap className="w-7 h-7 text-emerald-400"/>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-300">Action</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-4 h-4 text-purple-400"/>
                    <span className="text-xs font-bold text-purple-300">Contenu de la Mémoire</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 bg-purple-950/30 rounded">
                      <span className="text-[9px] font-bold text-purple-300 block">📜 Historique</span>
                      <span className="text-[8px] text-slate-400">Positions passées</span>
                    </div>
                    <div className="p-2 bg-purple-950/30 rounded">
                      <span className="text-[9px] font-bold text-purple-300 block">️ Carte interne</span>
                      <span className="text-[8px] text-slate-400">Représentation monde</span>
                    </div>
                    <div className="p-2 bg-purple-950/30 rounded">
                      <span className="text-[9px] font-bold text-purple-300 block">📊 État courant</span>
                      <span className="text-[8px] text-slate-400">Situation actuelle</span>
                    </div>
                    <div className="p-2 bg-purple-950/30 rounded">
                      <span className="text-[9px] font-bold text-purple-300 block">🎯 Objectifs</span>
                      <span className="text-[8px] text-slate-400">Buts à atteindre</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Agents Cognitifs (BDI)",
          text: "Les agents cognitifs sont les plus avancés. Ils utilisent un modèle mental basé sur BDI : Beliefs (croyances), Desires (désirs), Intentions (intentions). Ils sont capables de raisonnement, planification et prise de décision complexe.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-purple-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <BrainCircuit className="w-5 h-5 text-purple-400"/>
                <span className="text-sm font-bold text-purple-400 tracking-wider uppercase">Modèle BDI Complet</span>
              </div>
              <div className="p-5 bg-gradient-to-br from-purple-950/30 to-pink-950/30 border-2 border-purple-500/30 rounded-xl">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="p-3 bg-purple-900/40 border border-purple-500/50 rounded-lg text-center">
                    <div className="w-12 h-12 bg-purple-900/60 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BookOpen className="w-6 h-6 text-purple-400"/>
                    </div>
                    <span className="text-xs font-bold text-purple-300 block mb-1">BELIEFS</span>
                    <span className="text-[8px] text-slate-400 block">Croyances</span>
                    <div className="mt-2 p-1.5 bg-slate-900 rounded text-[8px] text-slate-300">"La porte est fermée"</div>
                  </div>
                  <div className="p-3 bg-pink-900/40 border border-pink-500/50 rounded-lg text-center">
                    <div className="w-12 h-12 bg-pink-900/60 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Target className="w-6 h-6 text-pink-400"/>
                    </div>
                    <span className="text-xs font-bold text-pink-300 block mb-1">DESIRES</span>
                    <span className="text-[8px] text-slate-400 block">Désirs/Buts</span>
                    <div className="mt-2 p-1.5 bg-slate-900 rounded text-[8px] text-slate-300">"Atteindre la pièce B"</div>
                  </div>
                  <div className="p-3 bg-cyan-900/40 border border-cyan-500/50 rounded-lg text-center">
                    <div className="w-12 h-12 bg-cyan-900/60 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="w-6 h-6 text-cyan-400"/>
                    </div>
                    <span className="text-xs font-bold text-cyan-300 block mb-1">INTENTIONS</span>
                    <span className="text-[8px] text-slate-400 block">Intentions</span>
                    <div className="mt-2 p-1.5 bg-slate-900 rounded text-[8px] text-slate-300">"Ouvrir la porte"</div>
                  </div>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <BrainCircuit className="w-4 h-4 text-purple-400"/>
                    <span className="text-xs font-bold text-purple-300">Processus de Raisonnement</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <div className="w-10 h-10 bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                        <Eye className="w-5 h-5 text-purple-400"/>
                      </div>
                      <span className="text-[8px] text-purple-300">Perception</span>
                    </div>
                    <ArrowRight className="w-3 h-3 text-purple-500"/>
                    <div className="text-center flex-1">
                      <div className="w-10 h-10 bg-pink-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                        <RefreshCw className="w-5 h-5 text-pink-400"/>
                      </div>
                      <span className="text-[8px] text-pink-300">Mise à jour B</span>
                    </div>
                    <ArrowRight className="w-3 h-3 text-purple-500"/>
                    <div className="text-center flex-1">
                      <div className="w-10 h-10 bg-amber-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                        <GitBranch className="w-5 h-5 text-amber-400"/>
                      </div>
                      <span className="text-[8px] text-amber-300">Planification</span>
                    </div>
                    <ArrowRight className="w-3 h-3 text-purple-500"/>
                    <div className="text-center flex-1">
                      <div className="w-10 h-10 bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                        <Zap className="w-5 h-5 text-emerald-400"/>
                      </div>
                      <span className="text-[8px] text-emerald-300">Exécution</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-purple-400"/>
                  <span className="text-xs font-bold text-purple-300">Niveau de Complexité</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-slate-400 w-20">Réactif</span>
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500 rounded-full" style={{width: '20%'}}></div>
                    </div>
                    <span className="text-[8px] text-cyan-300 w-8">20%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-slate-400 w-20">Avec État</span>
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{width: '50%'}}></div>
                    </div>
                    <span className="text-[8px] text-blue-300 w-8">50%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-purple-300 w-20 font-bold">BDI</span>
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <span className="text-[8px] text-purple-300 w-8 font-bold">100%</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
      schema: (
        <div className="flex flex-col items-center bg-slate-900/80 p-6 rounded-xl border border-cyan-500/20">
          <p className="text-sm font-bold text-cyan-400 mb-6 tracking-widest uppercase">Schéma comparatif des agents</p>
          <div className="grid grid-cols-1 gap-5 w-full">
            <div className="p-4 rounded-lg border border-cyan-500/30 bg-cyan-900/10">
              <h4 className="font-bold text-cyan-300 mb-2">Agent Réactif</h4>
              <p className="text-xs text-slate-400">Perception → Règles simples → Action immédiate</p>
            </div>
            <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-900/10">
              <h4 className="font-bold text-blue-300 mb-2">Agent avec État</h4>
              <p className="text-xs text-slate-400">Perception → Mémoire interne → Décision → Action</p>
            </div>
            <div className="p-4 rounded-lg border border-fuchsia-500/30 bg-fuchsia-900/10">
              <h4 className="font-bold text-fuchsia-300 mb-2">Agent Cognitif (BDI)</h4>
              <p className="text-xs text-slate-400">Croyances → Désirs → Intentions → Planification → Action</p>
            </div>
          </div>
        </div>
      ),
    }
  },
  {
    id: 4,
    short: "IV. JADE",
    title: "Implémentation avec JADE",
    icon: Terminal,
    color: "from-emerald-600 to-teal-900",
    border: "border-emerald-500/30",
    coverImage: "1780679688.png",
    content: {
      subtitle: "Middleware multi-agents basé sur Java et les standards FIPA",
      sections: [
        {
          title: "JADE et la standardisation FIPA",
          text: "JADE (Java Agent DEvelopment Framework) est une plateforme conforme aux standards FIPA permettant le développement d'agents intelligents distribués.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-emerald-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Terminal className="w-5 h-5 text-emerald-400"/>
                <span className="text-sm font-bold text-emerald-400 tracking-wider uppercase">Écosystème JADE / FIPA</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 bg-emerald-900/60 rounded-lg flex items-center justify-center">
                      <span className="text-xl">☕</span>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-emerald-300">JADE</span>
                      <p className="text-[8px] text-slate-400">Java Agent Development</p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="p-1.5 bg-slate-900 rounded text-[8px] text-slate-300 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-400"/> Framework open-source
                    </div>
                    <div className="p-1.5 bg-slate-900 rounded text-[8px] text-slate-300 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-400"/> Basé sur Java
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-blue-950/20 border border-blue-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 bg-blue-900/60 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-400"/>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-blue-300">FIPA</span>
                      <p className="text-[8px] text-slate-400">Foundation for Intelligent Physical Agents</p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="p-1.5 bg-slate-900 rounded text-[8px] text-slate-300 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-blue-400"/> Standards de communication
                    </div>
                    <div className="p-1.5 bg-slate-900 rounded text-[8px] text-slate-300 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-blue-400"/> Protocoles d'interaction
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="w-14 h-14 bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                      <Terminal className="w-7 h-7 text-emerald-400"/>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-300">JADE</span>
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 bg-slate-900 rounded text-[8px] text-amber-300 font-bold">conforme à</div>
                    </div>
                  </div>
                  <div className="text-center flex-1">
                    <div className="w-14 h-14 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                      <Shield className="w-7 h-7 text-blue-400"/>
                    </div>
                    <span className="text-[9px] font-bold text-blue-300">FIPA</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Architecture de la plateforme JADE",
          text: "Une plateforme JADE est composée de conteneurs d'agents. Le Main Container contient les services essentiels : l'AMS et le DF.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-emerald-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Server className="w-5 h-5 text-emerald-400"/>
                <span className="text-sm font-bold text-emerald-400 tracking-wider uppercase">Architecture Plateforme JADE</span>
              </div>
              <div className="p-5 bg-gradient-to-br from-emerald-950/30 to-teal-950/30 border-2 border-emerald-500/30 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-emerald-900/60 rounded-lg flex items-center justify-center">
                      <Server className="w-5 h-5 text-emerald-400"/>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-emerald-300">MAIN CONTAINER</span>
                      <p className="text-[8px] text-slate-400">Conteneur Principal</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 bg-blue-950/30 border border-blue-500/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-blue-900/60 rounded-lg flex items-center justify-center">
                        <Cog className="w-4 h-4 text-blue-400"/>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-blue-300">AMS</span>
                        <p className="text-[8px] text-slate-400">Agent Management System</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="p-1 bg-slate-900 rounded text-[8px] text-slate-300">• Création d'agents</div>
                      <div className="p-1 bg-slate-900 rounded text-[8px] text-slate-300">• Supervision</div>
                      <div className="p-1 bg-slate-900 rounded text-[8px] text-slate-300">• Page blanche</div>
                    </div>
                  </div>
                  <div className="p-3 bg-purple-950/30 border border-purple-500/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-purple-900/60 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-purple-400"/>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-purple-300">DF</span>
                        <p className="text-[8px] text-slate-400">Directory Facilitator</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="p-1 bg-slate-900 rounded text-[8px] text-slate-300">• Annuaire de services</div>
                      <div className="p-1 bg-slate-900 rounded text-[8px] text-slate-300">• Publication</div>
                      <div className="p-1 bg-slate-900 rounded text-[8px] text-slate-300">• Pages jaunes</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-slate-900/50 rounded-lg border border-emerald-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-emerald-400"/>
                    <span className="text-xs font-bold text-emerald-300">Agents du Main Container</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['A1', 'A2', 'A3'].map((name, i) => (
                      <div key={i} className="p-2 bg-emerald-950/30 rounded border border-emerald-500/30 text-center">
                        <Bot className="w-5 h-5 text-emerald-400 mx-auto mb-1"/>
                        <span className="text-[9px] font-bold text-emerald-300">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Communication entre agents",
          text: "Les agents JADE communiquent via des messages ACL (FIPA-ACL). Chaque message contient un type, un contenu et un destinataire.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-emerald-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-emerald-400"/>
                <span className="text-sm font-bold text-emerald-400 tracking-wider uppercase">Communication ACL dans JADE</span>
              </div>
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-700">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                      <Bot className="w-7 h-7 text-blue-400"/>
                    </div>
                    <span className="text-[9px] font-bold text-blue-300">Agent Émetteur</span>
                  </div>
                  <div className="flex-1 mx-3 relative">
                    <div className="h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-1 bg-emerald-950/60 rounded border border-emerald-500/30">
                      <span className="text-[8px] text-emerald-300 font-bold">ACL Message</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-1">
                      <Bot className="w-7 h-7 text-purple-400"/>
                    </div>
                    <span className="text-[9px] font-bold text-purple-300">Agent Récepteur</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-emerald-400"/>
                  <span className="text-xs font-bold text-emerald-300">Structure d'un Message ACL</span>
                </div>
                <div className="space-y-1.5">
                  {[
                    { field: ':performative', value: 'REQUEST', color: 'cyan', desc: 'Type d\'acte' },
                    { field: ':sender', value: 'agent1@platform', color: 'blue', desc: 'Émetteur' },
                    { field: ':receiver', value: 'agent2@platform', color: 'purple', desc: 'Destinataire' },
                    { field: ':content', value: '"action(param)"', color: 'emerald', desc: 'Contenu' },
                    { field: ':ontology', value: '"my-ontology"', color: 'amber', desc: 'Sémantique' },
                    { field: ':language', value: 'FIPA-SL', color: 'rose', desc: 'Langage' }
                  ].map((item, i) => (
                    <div key={i} className={`p-2 bg-${item.color}-950/20 rounded border border-${item.color}-500/30 flex items-center justify-between`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 bg-${item.color}-500 rounded-full`}></div>
                        <span className={`text-[9px] font-mono font-bold text-${item.color}-300`}>{item.field}</span>
                      </div>
                      <span className="text-[9px] font-mono text-slate-300">{item.value}</span>
                      <span className="text-[8px] text-slate-500">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Cycle de vie d'un agent JADE",
          text: "Un agent JADE passe par plusieurs états : initié, actif, en attente, suspendu et terminé. Chaque agent exécute des comportements (Behaviours).",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-emerald-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <RefreshCw className="w-5 h-5 text-emerald-400"/>
                <span className="text-sm font-bold text-emerald-400 tracking-wider uppercase">Cycle de Vie d'un Agent JADE</span>
              </div>
              <div className="p-5 bg-gradient-to-br from-emerald-950/20 to-teal-950/20 border-2 border-emerald-500/30 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  {[
                    { state: 'Initiated', icon: Circle, color: 'slate', desc: 'Créé' },
                    { state: 'Active', icon: Play, color: 'emerald', desc: 'En cours' },
                    { state: 'Suspended', icon: Pause, color: 'amber', desc: 'Suspendu' },
                    { state: 'Deleted', icon: Power, color: 'red', desc: 'Terminé' }
                  ].map((item, i, arr) => (
                    <React.Fragment key={i}>
                      <div className="text-center flex-1">
                        <div className={`w-14 h-14 bg-${item.color}-900/40 rounded-full flex items-center justify-center mx-auto mb-1 border-2 border-${item.color}-500/50`}>
                          <item.icon className={`w-6 h-6 text-${item.color}-400`}/>
                        </div>
                        <span className={`text-[9px] font-bold text-${item.color}-300 block`}>{item.state}</span>
                        <span className="text-[8px] text-slate-400">{item.desc}</span>
                      </div>
                      {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-emerald-500 flex-shrink-0"/>}
                    </React.Fragment>
                  ))}
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <GitBranch className="w-4 h-4 text-emerald-400"/>
                    <span className="text-xs font-bold text-emerald-300">Transitions</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[8px]">
                    <div className="p-1.5 bg-emerald-950/30 rounded text-emerald-300">doStart() → Active</div>
                    <div className="p-1.5 bg-amber-950/30 rounded text-amber-300">doSuspend() → Suspended</div>
                    <div className="p-1.5 bg-emerald-950/30 rounded text-emerald-300">doResume() → Active</div>
                    <div className="p-1.5 bg-red-950/30 rounded text-red-300">doDelete() → Deleted</div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <Cog className="w-4 h-4 text-emerald-400"/>
                  <span className="text-xs font-bold text-emerald-300">Types de Behaviours</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2 bg-cyan-950/20 border border-cyan-500/30 rounded flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-cyan-400"/>
                    <div className="flex-1">
                      <span className="text-[9px] font-bold text-cyan-300">CyclicBehaviour</span>
                      <p className="text-[8px] text-slate-400">S'exécute en boucle infinie</p>
                    </div>
                  </div>
                  <div className="p-2 bg-purple-950/20 border border-purple-500/30 rounded flex items-center gap-2">
                    <Timer className="w-4 h-4 text-purple-400"/>
                    <div className="flex-1">
                      <span className="text-[9px] font-bold text-purple-300">OneShotBehaviour</span>
                      <p className="text-[8px] text-slate-400">S'exécute une seule fois</p>
                    </div>
                  </div>
                  <div className="p-2 bg-amber-950/20 border border-amber-500/30 rounded flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-400"/>
                    <div className="flex-1">
                      <span className="text-[9px] font-bold text-amber-300">WakerBehaviour</span>
                      <p className="text-[8px] text-slate-400">S'exécute après un délai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
      schema: (
        <div className="bg-slate-900/80 p-6 rounded-xl border border-emerald-500/20 flex flex-col items-center w-full">
          <p className="text-sm font-bold text-emerald-400 mb-4 tracking-widest uppercase">Architecture JADE (Main Container)</p>
          <div className="border-2 border-dashed border-emerald-500/30 p-6 rounded-xl flex flex-col gap-4 w-full bg-black/20">
            <div className="flex justify-around w-full">
              <div className="flex flex-col items-center p-3 bg-slate-800 rounded border border-slate-600">
                <Cog className="text-slate-400 mb-1" />
                <span className="text-[10px] font-mono">AMS</span>
                <span className="text-[9px] text-slate-400 text-center">Gestion du cycle de vie</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-emerald-900/40 rounded border border-emerald-500/50">
                <BookOpen className="text-emerald-400 mb-1" />
                <span className="text-[10px] font-mono">DF</span>
                <span className="text-[9px] text-emerald-200 text-center">Annuaire des services</span>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex flex-col items-center p-4 bg-teal-900/40 rounded border border-teal-500/50">
                <Bot className="text-teal-400 mb-1" />
                <span className="text-[10px] font-mono">Agents JADE</span>
                <span className="text-[9px] text-teal-200 text-center">Communication via ACL / FIPA</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  },
  {
    id: 5,
    short: "V. Comms",
    title: "Communication entre Agents",
    icon: MessageSquare,
    color: "from-cyan-500 to-blue-700",
    border: "border-cyan-400/30",
    coverImage: "/1780680039.png",
    content: {
      subtitle: "Stigmergie, Télémétrie et FIPA-ACL dans les systèmes multi-agents",
      sections: [
        {
          title: "Stigmergie",
          text: "La stigmergie est un mécanisme de coordination indirecte où les agents interagissent via les modifications de l'environnement.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-cyan-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Share2 className="w-5 h-5 text-cyan-400"/>
                <span className="text-sm font-bold text-cyan-400 tracking-wider uppercase">Mécanisme de Stigmergie</span>
              </div>
              <div className="p-4 bg-amber-950/20 border border-amber-700/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-amber-400"/>
                  <span className="text-xs font-bold text-amber-300">Inspiration Naturelle</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-900 rounded border border-slate-700">
                    <div className="text-2xl mb-1">🐜</div>
                    <span className="text-[10px] font-bold text-slate-300">Colonies de Fourmis</span>
                    <p className="text-[8px] text-slate-500 mt-1">Pistes de phéromones</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded border border-slate-700">
                    <div className="text-2xl mb-1">🐝</div>
                    <span className="text-[10px] font-bold text-slate-300">Essaims d'Abeilles</span>
                    <p className="text-[8px] text-slate-500 mt-1">Danse en 8</p>
                  </div>
                </div>
              </div>
              <div className="border-2 border-dashed border-cyan-500/30 rounded-xl p-5 bg-gradient-to-br from-cyan-950/10 to-blue-950/10 space-y-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-cyan-300">Boucle de Coordination Indirecte</span>
                  <RefreshCw className="w-4 h-4 text-cyan-500 animate-spin"/>
                </div>
                <div className="p-3 bg-blue-950/30 border border-blue-700/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-blue-400"/>
                    </div>
                    <span className="text-[10px] font-bold text-blue-300">Agent 1</span>
                  </div>
                  <div className="flex items-center gap-2 text-[9px]">
                    <div className="flex-1 p-1.5 bg-slate-900 rounded text-center text-slate-400">
                      <Zap className="w-3 h-3 mx-auto mb-0.5 text-blue-400"/>
                      Agit sur l'Env.
                    </div>
                    <ArrowRight className="w-3 h-3 text-cyan-500"/>
                    <div className="flex-1 p-1.5 bg-cyan-950/40 rounded text-center text-cyan-300">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mx-auto mb-0.5"></div>
                      Laisse une Trace
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-emerald-950/20 border border-emerald-700/30 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-emerald-400"/>
                    <span className="text-[10px] font-bold text-emerald-300">Environnement Partagé</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-200"></div>
                    <span className="text-[8px] text-slate-400 ml-2">Carte de Pheromones/Traces</span>
                  </div>
                </div>
                <div className="p-3 bg-purple-950/30 border border-purple-700/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-purple-400"/>
                    </div>
                    <span className="text-[10px] font-bold text-purple-300">Agent 2</span>
                  </div>
                  <div className="flex items-center gap-2 text-[9px]">
                    <div className="flex-1 p-1.5 bg-purple-950/40 rounded text-center text-purple-300">
                      <Eye className="w-3 h-3 mx-auto mb-0.5"/>
                      Observe la Trace
                    </div>
                    <ArrowRight className="w-3 h-3 text-cyan-500"/>
                    <div className="flex-1 p-1.5 bg-slate-900 rounded text-center text-slate-400">
                      <Zap className="w-3 h-3 mx-auto mb-0.5 text-purple-400"/>
                      Décide de l'Action
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-cyan-400"/>
                  <span className="text-xs font-bold text-cyan-300">Caractéristiques Clés</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[9px]">
                  <div className="p-1.5 bg-slate-800/50 rounded">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span className="text-slate-400 ml-1">Pas de messagerie directe</span>
                  </div>
                  <div className="p-1.5 bg-slate-800/50 rounded">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span className="text-slate-400 ml-1">Environnement comme médium</span>
                  </div>
                  <div className="p-1.5 bg-slate-800/50 rounded">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span className="text-slate-400 ml-1">Scalable</span>
                  </div>
                  <div className="p-1.5 bg-slate-800/50 rounded">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span className="text-slate-400 ml-1">Auto-organisé</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Télémétrie",
          text: "La télémétrie correspond à la transmission de données mesurées par des capteurs vers d'autres agents ou systèmes.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-blue-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-blue-400"/>
                <span className="text-sm font-bold text-blue-400 tracking-wider uppercase">Flux de Données de Télémétrie</span>
              </div>
              <div className="p-4 bg-emerald-950/20 border border-emerald-700/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-emerald-400"/>
                    <span className="text-sm font-bold text-emerald-300">Couche Capteurs</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 bg-slate-900 rounded border border-slate-700 text-center">
                    <div className="text-xl mb-1">🌡️</div>
                    <span className="text-[9px] font-bold text-slate-300">Température</span>
                    <p className="text-[8px] text-slate-500 mt-0.5">25.4°C</p>
                  </div>
                  <div className="p-2 bg-slate-900 rounded border border-slate-700 text-center">
                    <div className="text-xl mb-1">📍</div>
                    <span className="text-[9px] font-bold text-slate-300">Position</span>
                    <p className="text-[8px] text-slate-500 mt-0.5">X:45 Y:78</p>
                  </div>
                  <div className="p-2 bg-slate-900 rounded border border-slate-700 text-center">
                    <div className="text-xl mb-1">🔋</div>
                    <span className="text-[9px] font-bold text-slate-300">Batterie</span>
                    <p className="text-[8px] text-slate-500 mt-0.5">87%</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <ChevronRight className="w-5 h-5 text-blue-500 rotate-90"/>
                  <span className="text-[8px] text-blue-400 font-bold">Transmission Sans Fil</span>
                </div>
              </div>
              <div className="p-4 bg-blue-950/20 border border-blue-700/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Network className="w-5 h-5 text-blue-400"/>
                  <span className="text-sm font-bold text-blue-300">Transmission</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center gap-1 mb-1">
                      <Wifi className="w-3 h-3 text-blue-400"/>
                      <span className="text-[9px] font-bold text-slate-300">WiFi</span>
                    </div>
                    <p className="text-[8px] text-slate-500">Haut débit</p>
                  </div>
                  <div className="p-2 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center gap-1 mb-1">
                      <Share2 className="w-3 h-3 text-blue-400"/>
                      <span className="text-[9px] font-bold text-slate-300">LoRaWAN</span>
                    </div>
                    <p className="text-[8px] text-slate-500">Longue portée</p>
                  </div>
                  <div className="p-2 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center gap-1 mb-1">
                      <Zap className="w-3 h-3 text-blue-400"/>
                      <span className="text-[9px] font-bold text-slate-300">5G</span>
                    </div>
                    <p className="text-[8px] text-slate-500">Faible latence</p>
                  </div>
                  <div className="p-2 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center gap-1 mb-1">
                      <Circle className="w-3 h-3 text-blue-400"/>
                      <span className="text-[9px] font-bold text-slate-300">MQTT</span>
                    </div>
                    <p className="text-[8px] text-slate-500">Léger (IoT)</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <ChevronRight className="w-5 h-5 text-blue-500 rotate-90"/>
                  <span className="text-[8px] text-blue-400 font-bold">Données Temps Réel</span>
                </div>
              </div>
              <div className="p-4 bg-purple-950/20 border border-purple-700/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <BrainCircuit className="w-5 h-5 text-purple-400"/>
                  <span className="text-sm font-bold text-purple-300">Traitement et Surveillance</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-700">
                    <Bot className="w-4 h-4 text-purple-400"/>
                    <span className="text-[9px] font-bold text-slate-300">Contrôleur d'Agent</span>
                    <div className="flex-1"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-700">
                    <Database className="w-4 h-4 text-purple-400"/>
                    <span className="text-[9px] font-bold text-slate-300">Base de données</span>
                    <div className="flex-1"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-700">
                    <Activity className="w-4 h-4 text-purple-400"/>
                    <span className="text-[9px] font-bold text-slate-300">Tableau de bord</span>
                    <div className="flex-1"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "FIPA-ACL",
          text: "FIPA-ACL est un langage standardisé de communication entre agents. Il permet des échanges structurés basés sur des performatifs.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-cyan-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-cyan-400"/>
                <span className="text-sm font-bold text-cyan-400 tracking-wider uppercase">Structure du Message FIPA-ACL</span>
              </div>
              <div className="p-4 bg-cyan-950/20 border border-cyan-700/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Network className="w-4 h-4 text-cyan-400"/>
                  <span className="text-xs font-bold text-cyan-300">Communication entre Agents</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 p-3 bg-blue-950/30 border border-blue-700/50 rounded-lg text-center">
                    <div className="w-8 h-8 bg-blue-900 rounded-full mx-auto mb-1 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-blue-400"/>
                    </div>
                    <span className="text-[10px] font-bold text-blue-300">Agent Émetteur</span>
                    <p className="text-[8px] text-slate-500 mt-0.5">Supervisor</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    <div className="flex items-center justify-center mt-1 px-2 py-0.5 bg-cyan-950/40 rounded border border-cyan-700/30">
                      <span className="text-[7px] text-cyan-300 font-bold">MSG ACL</span>
                    </div>
                  </div>
                  <div className="flex-1 p-3 bg-purple-950/30 border border-purple-700/50 rounded-lg text-center">
                    <div className="w-8 h-8 bg-purple-900 rounded-full mx-auto mb-1 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-purple-400"/>
                    </div>
                    <span className="text-[10px] font-bold text-purple-300">Agent Récepteur</span>
                    <p className="text-[8px] text-slate-500 mt-0.5">Node_ESP32</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-amber-400"/>
                  <span className="text-xs font-bold text-amber-300">Performatifs de Message</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-blue-950/30 border border-blue-700/30 rounded">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-4 h-4 bg-blue-900 rounded flex items-center justify-center">
                        <span className="text-[8px] font-bold text-blue-300">REQ</span>
                      </div>
                      <span className="text-[9px] font-bold text-blue-300">REQUEST</span>
                    </div>
                    <p className="text-[8px] text-slate-500">Demander une action</p>
                  </div>
                  <div className="p-2 bg-emerald-950/30 border border-emerald-700/30 rounded">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-4 h-4 bg-emerald-900 rounded flex items-center justify-center">
                        <span className="text-[8px] font-bold text-emerald-300">INF</span>
                      </div>
                      <span className="text-[9px] font-bold text-emerald-300">INFORM</span>
                    </div>
                    <p className="text-[8px] text-slate-500">Fournir une information</p>
                  </div>
                  <div className="p-2 bg-purple-950/30 border border-purple-700/30 rounded">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-4 h-4 bg-purple-900 rounded flex items-center justify-center">
                        <span className="text-[8px] font-bold text-purple-300">PROP</span>
                      </div>
                      <span className="text-[9px] font-bold text-purple-300">PROPOSE</span>
                    </div>
                    <p className="text-[8px] text-slate-500">Faire une offre</p>
                  </div>
                  <div className="p-2 bg-cyan-950/30 border border-cyan-700/30 rounded">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-4 h-4 bg-cyan-900 rounded flex items-center justify-center">
                        <span className="text-[8px] font-bold text-cyan-300">QRY</span>
                      </div>
                      <span className="text-[9px] font-bold text-cyan-300">QUERY</span>
                    </div>
                    <p className="text-[8px] text-slate-500">Demander une info</p>
                  </div>
                </div>
              </div>
              <div className="border-2 border-dashed border-cyan-500/30 rounded-xl p-4 bg-gradient-to-br from-cyan-950/10 to-blue-950/10 space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-cyan-400"/>
                  <span className="text-xs font-bold text-cyan-300">Composants du Message</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        <span className="text-[9px] font-bold text-cyan-300">:performative</span>
                      </div>
                      <span className="text-[9px] font-mono text-cyan-400">REQUEST</span>
                    </div>
                    <p className="text-[8px] text-slate-500 mt-1 ml-4">Type d'acte de communication</p>
                  </div>
                  <div className="p-2 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-[9px] font-bold text-blue-300">:sender</span>
                      </div>
                      <span className="text-[9px] font-mono text-blue-400">Supervisor</span>
                    </div>
                    <p className="text-[8px] text-slate-500 mt-1 ml-4">Agent qui envoie le message</p>
                  </div>
                  <div className="p-2 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-[9px] font-bold text-purple-300">:receiver</span>
                      </div>
                      <span className="text-[9px] font-mono text-purple-400">Node_ESP32</span>
                    </div>
                    <p className="text-[8px] text-slate-500 mt-1 ml-4">Agent qui reçoit le message</p>
                  </div>
                  <div className="p-2 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-[9px] font-bold text-emerald-300">:content</span>
                      </div>
                      <span className="text-[9px] font-mono text-emerald-400">"trigger_safety_relay(3)"</span>
                    </div>
                    <p className="text-[8px] text-slate-500 mt-1 ml-4">Charge utile du message</p>
                  </div>
                  <div className="p-2 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-[9px] font-bold text-amber-300">:ontology</span>
                      </div>
                      <span className="text-[9px] font-mono text-amber-400">"hardware-control"</span>
                    </div>
                    <p className="text-[8px] text-slate-500 mt-1 ml-4">Vocabulaire / Sémantique partagée</p>
                  </div>
                  <div className="p-2 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                        <span className="text-[9px] font-bold text-rose-300">:language</span>
                      </div>
                      <span className="text-[9px] font-mono text-rose-400">FIPA-SL</span>
                    </div>
                    <p className="text-[8px] text-slate-500 mt-1 ml-4">Langage du contenu</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-4 h-4 text-cyan-400"/>
                  <span className="text-xs font-bold text-cyan-300">Message FIPA-ACL Complet</span>
                </div>
                <pre className="text-[9px] text-cyan-300 font-mono bg-black/80 p-3 rounded border border-cyan-900/50 overflow-x-auto">
{`(REQUEST
  :sender (agent-identifier :name Supervisor)
  :receiver (set (agent-identifier :name Node_ESP32))
  :content "trigger_safety_relay(3)"
  :ontology "hardware-control"
  :language "FIPA-SL"
  :reply-with "relay_cmd_001"
  :reply-by 20260604T150000
)`}
                </pre>
              </div>
            </div>
          ),
        },
      ],
      schema: (
        <div className="w-full bg-slate-900/80 p-6 rounded-xl border border-cyan-500/20">
          <p className="text-sm font-bold text-cyan-400 mb-4 text-center tracking-widest uppercase flex items-center justify-center gap-2">
            <Wifi className="w-4 h-4"/> Trame FIPA-ACL
          </p>
          <pre className="text-xs text-cyan-300 font-mono bg-black/80 p-4 rounded-lg border border-cyan-900/50 overflow-x-auto shadow-inner">
{`(REQUEST
  :sender (agent-identifier :name Supervisor)
  :receiver (set (agent-identifier :name Node_ESP32))
  :content "trigger_safety_relay(3)"
  :ontology "hardware-control"
  :language "FIPA-SL"
)`}
          </pre>
        </div>
      ),
    },
  },
  {
    id: 6,
    short: "VI. Agentic AI",
    title: "Agentic AI (IA Agentive)",
    icon: Sparkles,
    color: "from-rose-600 to-red-900",
    border: "border-rose-500/30",
    coverImage: "/1780688347.png",
    content: {
      subtitle: "Hybridation des LLMs, des systèmes multi-agents et des architectures cognitives modernes",
      sections: [
        {
          title: "1. IA Générative & Ingénierie de Prompt",
          text: "L'IA générative repose sur les Transformers et les LLMs. Le prompt engineering permet de contrôler les modèles via Zero-Shot, Few-Shot, Chain-of-Thought et Reasoning.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-rose-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-rose-400"/>
                <span className="text-sm font-bold text-rose-400 tracking-wider uppercase">Stratégies d'Ingénierie de Prompt</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 p-3 bg-slate-900 border border-slate-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold text-rose-300 uppercase">Entrée Utilisateur</span>
                  </div>
                  <p className="text-xs text-slate-400">Requête en langage naturel</p>
                </div>
              </div>
              <div className="flex justify-center">
                <ChevronRight className="w-5 h-5 text-rose-500 rotate-90"/>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-purple-950/30 border border-purple-700/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-purple-400"/>
                    <span className="text-[10px] font-bold text-purple-300">Zero-Shot</span>
                  </div>
                  <p className="text-[10px] text-slate-500">Question directe sans exemple</p>
                </div>
                <div className="p-3 bg-blue-950/30 border border-blue-700/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Circle className="w-4 h-4 text-blue-400"/>
                    <span className="text-[10px] font-bold text-blue-300">Few-Shot</span>
                  </div>
                  <p className="text-[10px] text-slate-500">Exemples fournis dans le prompt</p>
                </div>
                <div className="p-3 bg-amber-950/30 border border-amber-700/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <GitBranch className="w-4 h-4 text-amber-400"/>
                    <span className="text-[10px] font-bold text-amber-300">Chain-of-Thought</span>
                  </div>
                  <p className="text-[10px] text-slate-500">Raisonnement étape par étape</p>
                </div>
                <div className="p-3 bg-emerald-950/30 border border-emerald-700/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <BrainCircuit className="w-4 h-4 text-emerald-400"/>
                    <span className="text-[10px] font-bold text-emerald-300">Reasoning</span>
                  </div>
                  <p className="text-[10px] text-slate-500">Inférence logique complexe</p>
                </div>
              </div>
              <div className="flex justify-center">
                <ChevronRight className="w-5 h-5 text-rose-500 rotate-90"/>
              </div>
              <div className="p-4 bg-gradient-to-r from-rose-950/40 to-purple-950/40 border border-rose-700/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-rose-400"/>
                    <span className="text-sm font-bold text-rose-300">Traitement LLM</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400">Tokenisation → Mécanisme d'Attention → Génération</p>
              </div>
              <div className="flex justify-center">
                <ChevronRight className="w-5 h-5 text-rose-500 rotate-90"/>
              </div>
              <div className="p-3 bg-emerald-950/30 border border-emerald-700/50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-emerald-400"/>
                  <span className="text-[10px] font-bold text-emerald-300 uppercase">Sortie Structurée</span>
                </div>
                <p className="text-xs text-slate-400">Réponse contextuelle avec raisonnement</p>
              </div>
            </div>
          ),
        },
        {
          title: "2. Retrieval-Augmented Generation (RAG)",
          text: "Le RAG améliore les LLMs en ajoutant des données externes pour réduire les hallucinations via une base vectorielle.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-cyan-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Database className="w-5 h-5 text-cyan-400"/>
                <span className="text-sm font-bold text-cyan-400 tracking-wider uppercase">Architecture du Pipeline RAG</span>
              </div>
              <div className="p-4 bg-blue-950/20 border border-blue-700/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="px-2 py-0.5 bg-blue-900/60 rounded text-[9px] font-bold text-blue-300">PHASE 1</div>
                  <span className="text-xs font-bold text-blue-300">Ingestion et Traitement</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center gap-1 mb-1">
                      <BookOpen className="w-3 h-3 text-slate-400"/>
                      <span className="text-[9px] font-bold text-slate-300">Documents</span>
                    </div>
                    <p className="text-[8px] text-slate-500">PDFs, Articles</p>
                  </div>
                  <div className="p-2 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center gap-1 mb-1">
                      <Layers className="w-3 h-3 text-slate-400"/>
                      <span className="text-[9px] font-bold text-slate-300">Chunking</span>
                    </div>
                    <p className="text-[8px] text-slate-500">Découpage</p>
                  </div>
                  <div className="p-2 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center gap-1 mb-1">
                      <Workflow className="w-3 h-3 text-slate-400"/>
                      <span className="text-[9px] font-bold text-slate-300">Embedding</span>
                    </div>
                    <p className="text-[8px] text-slate-500">Conversion vecteurs</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <ChevronRight className="w-5 h-5 text-cyan-500 rotate-90"/>
              </div>
              <div className="p-4 bg-cyan-950/30 border border-cyan-700/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-cyan-400"/>
                    <span className="text-xs font-bold text-cyan-300">Base Vectorielle</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[9px]">
                  <div className="p-1.5 bg-slate-900/50 rounded">
                    <span className="text-cyan-400 font-bold">Stockage:</span>
                    <span className="text-slate-400 ml-1">Pinecone, Chroma</span>
                  </div>
                  <div className="p-1.5 bg-slate-900/50 rounded">
                    <span className="text-cyan-400 font-bold">Recherche:</span>
                    <span className="text-slate-400 ml-1">Similarité Cosinus</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <ChevronRight className="w-5 h-5 text-cyan-500 rotate-90"/>
              </div>
              <div className="p-4 bg-emerald-950/20 border border-emerald-700/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="px-2 py-0.5 bg-emerald-900/60 rounded text-[9px] font-bold text-emerald-300">PHASE 2</div>
                  <span className="text-xs font-bold text-emerald-300">Requête et Récupération</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 p-2 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center gap-1 mb-1">
                      <MessageSquare className="w-3 h-3 text-emerald-400"/>
                      <span className="text-[9px] font-bold text-slate-300">Requête</span>
                    </div>
                    <p className="text-[8px] text-slate-500">"Qu'est-ce qu'un SMA ?"</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-500"/>
                  <div className="flex-1 p-2 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center gap-1 mb-1">
                      <Eye className="w-3 h-3 text-emerald-400"/>
                      <span className="text-[9px] font-bold text-slate-300">Résultats Top-K</span>
                    </div>
                    <p className="text-[8px] text-slate-500">Segments pertinents</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <ChevronRight className="w-5 h-5 text-cyan-500 rotate-90"/>
              </div>
              <div className="p-4 bg-rose-950/20 border border-rose-700/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="px-2 py-0.5 bg-rose-900/60 rounded text-[9px] font-bold text-rose-300">PHASE 3</div>
                  <span className="text-xs font-bold text-rose-300">Génération Augmentée</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 p-2 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center gap-1 mb-1">
                      <Boxes className="w-3 h-3 text-rose-400"/>
                      <span className="text-[9px] font-bold text-slate-300">Contexte</span>
                    </div>
                    <p className="text-[8px] text-slate-500">Requête + Docs</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-rose-500"/>
                  <div className="flex-1 p-2 bg-gradient-to-r from-rose-950/40 to-purple-950/40 rounded border border-rose-700/50">
                    <div className="flex items-center gap-1 mb-1">
                      <Bot className="w-3 h-3 text-rose-400"/>
                      <span className="text-[9px] font-bold text-rose-300">Génération LLM</span>
                    </div>
                    <p className="text-[8px] text-slate-400">Réponse ancrée</p>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-r from-emerald-950/30 to-cyan-950/30 border border-emerald-700/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400"/>
                    <span className="text-[10px] font-bold text-emerald-300">Réponse Finale</span>
                  </div>
                </div>
                <p className="text-[9px] text-slate-400 mt-1">Réponse précise, contextuelle et sans hallucination</p>
              </div>
            </div>
          ),
        },
        {
          title: "3. AI Agents (Mind + Body)",
          text: "Un agent IA combine un Mind (LLM) et un Body (tools, APIs, MCP) pour agir sur l'environnement.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-rose-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Bot className="w-5 h-5 text-rose-400"/>
                <span className="text-sm font-bold text-rose-400 tracking-wider uppercase">Architecture de l'Agent IA</span>
              </div>
              <div className="border-2 border-dashed border-rose-500/30 rounded-xl p-5 bg-gradient-to-br from-slate-900/50 to-slate-950/50 space-y-4">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-950/40 to-rose-950/40 rounded-lg border border-purple-700/30">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-900/60 rounded-full flex items-center justify-center">
                      <BrainCircuit className="w-5 h-5 text-purple-400"/>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-purple-300">Agent IA</span>
                      <p className="text-[9px] text-slate-500">Preneur de décision autonome</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-purple-950/30 border border-purple-700/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-purple-900 rounded flex items-center justify-center">
                        <BrainCircuit className="w-4 h-4 text-purple-400"/>
                      </div>
                      <span className="text-xs font-bold text-purple-300">MIND (Esprit)</span>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 bg-slate-900 rounded border border-slate-700">
                        <div className="flex items-center gap-1 mb-1">
                          <Sparkles className="w-3 h-3 text-purple-400"/>
                          <span className="text-[9px] font-bold text-slate-300">Cœur LLM</span>
                        </div>
                        <p className="text-[8px] text-slate-500">Raisonnement</p>
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-700">
                        <div className="flex items-center gap-1 mb-1">
                          <Database className="w-3 h-3 text-purple-400"/>
                          <span className="text-[9px] font-bold text-slate-300">Mémoire</span>
                        </div>
                        <p className="text-[8px] text-slate-500">Court & Long terme</p>
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-700">
                        <div className="flex items-center gap-1 mb-1">
                          <Eye className="w-3 h-3 text-purple-400"/>
                          <span className="text-[9px] font-bold text-slate-300">Perception</span>
                        </div>
                        <p className="text-[8px] text-slate-500">Traitement entrées</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-blue-950/30 border border-blue-700/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-blue-900 rounded flex items-center justify-center">
                        <Zap className="w-4 h-4 text-blue-400"/>
                      </div>
                      <span className="text-xs font-bold text-blue-300">BODY (Corps)</span>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 bg-slate-900 rounded border border-slate-700">
                        <div className="flex items-center gap-1 mb-1">
                          <Cog className="w-3 h-3 text-blue-400"/>
                          <span className="text-[9px] font-bold text-slate-300">Outils</span>
                        </div>
                        <p className="text-[8px] text-slate-500">Fonctions & Scripts</p>
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-700">
                        <div className="flex items-center gap-1 mb-1">
                          <Network className="w-3 h-3 text-blue-400"/>
                          <span className="text-[9px] font-bold text-slate-300">APIs</span>
                        </div>
                        <p className="text-[8px] text-slate-500">Services Externes</p>
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-700">
                        <div className="flex items-center gap-1 mb-1">
                          <Wifi className="w-3 h-3 text-blue-400"/>
                          <span className="text-[9px] font-bold text-slate-300">MCP</span>
                        </div>
                        <p className="text-[8px] text-slate-500">Model Context Protocol</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-gradient-to-r from-rose-950/20 to-orange-950/20 border border-rose-700/30 rounded-lg">
                  <div className="flex items-center justify-between text-[9px]">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-purple-900/60 rounded flex items-center justify-center">
                        <Eye className="w-3 h-3 text-purple-400"/>
                      </div>
                      <span className="text-purple-300 font-bold">OBSERVE</span>
                    </div>
                    <ArrowRight className="w-3 h-3 text-slate-500"/>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-amber-900/60 rounded flex items-center justify-center">
                        <BrainCircuit className="w-3 h-3 text-amber-400"/>
                      </div>
                      <span className="text-amber-300 font-bold">THINK</span>
                    </div>
                    <ArrowRight className="w-3 h-3 text-slate-500"/>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-900/60 rounded flex items-center justify-center">
                        <Zap className="w-3 h-3 text-blue-400"/>
                      </div>
                      <span className="text-blue-300 font-bold">ACT</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-slate-900/50 border border-slate-700 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-emerald-400"/>
                      <span className="text-xs font-bold text-emerald-300">Environnement</span>
                    </div>
                  </div>
                  <p className="text-[9px] text-slate-500 mt-1">Systèmes réels, BDD, IoT, services web</p>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "4. ReAct Pattern",
          text: "ReAct combine Reasoning et Acting dans une boucle dynamique pour résoudre des problèmes complexes.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-yellow-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <RefreshCw className="w-5 h-5 text-yellow-400"/>
                <span className="text-sm font-bold text-yellow-400 tracking-wider uppercase">Architecture de la Boucle ReAct</span>
              </div>
              <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-yellow-400"/>
                  <span className="text-xs font-bold text-yellow-300">Tâche / But Initial</span>
                </div>
                <p className="text-[10px] text-slate-400">"Rechercher les dernières tendances des SMA et créer un résumé"</p>
              </div>
              <div className="flex justify-center">
                <ChevronRight className="w-5 h-5 text-yellow-500 rotate-90"/>
              </div>
              <div className="border-2 border-dashed border-yellow-500/30 rounded-xl p-5 bg-gradient-to-br from-yellow-950/10 to-orange-950/10 space-y-4 relative">
                <div className="absolute -top-3 right-4 px-3 py-1 bg-yellow-900/60 rounded-full border border-yellow-500/50">
                  <span className="text-[9px] font-bold text-yellow-300">BOUCLE ITÉRATIVE</span>
                </div>
                <div className="p-4 bg-gradient-to-r from-amber-950/30 to-orange-950/30 border border-amber-700/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-amber-900/60 rounded-full flex items-center justify-center">
                      <BrainCircuit className="w-5 h-5 text-amber-400"/>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-amber-300">THINK (Réfléchir)</span>
                      <p className="text-[9px] text-slate-500">Phase de Raisonnement</p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="p-2 bg-slate-900/50 rounded text-[9px]">
                      <span className="text-amber-400 font-bold">→</span>
                      <span className="text-slate-400 ml-1">Analyser l'état actuel et le but</span>
                    </div>
                    <div className="p-2 bg-slate-900/50 rounded text-[9px]">
                      <span className="text-amber-400 font-bold">→</span>
                      <span className="text-slate-400 ml-1">Déterminer la prochaine action</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ChevronRight className="w-4 h-4 text-yellow-500 rotate-90"/>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-950/30 to-cyan-950/30 border border-blue-700/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-900/60 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-400"/>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-blue-300">ACT (Agir)</span>
                      <p className="text-[9px] text-slate-500">Phase d'Exécution</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 bg-slate-900/50 rounded text-[9px]">
                      <span className="text-blue-400 font-bold">🔍</span>
                      <span className="text-slate-400 ml-1">Recherche Web</span>
                    </div>
                    <div className="p-2 bg-slate-900/50 rounded text-[9px]">
                      <span className="text-blue-400 font-bold"></span>
                      <span className="text-slate-400 ml-1">Requête API</span>
                    </div>
                    <div className="p-2 bg-slate-900/50 rounded text-[9px]">
                      <span className="text-blue-400 font-bold">💾</span>
                      <span className="text-slate-400 ml-1">Sauvegarder</span>
                    </div>
                    <div className="p-2 bg-slate-900/50 rounded text-[9px]">
                      <span className="text-blue-400 font-bold">⚙️</span>
                      <span className="text-slate-400 ml-1">Exécuter Outil</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ChevronRight className="w-4 h-4 text-yellow-500 rotate-90"/>
                </div>
                <div className="p-4 bg-gradient-to-r from-emerald-950/30 to-teal-950/30 border border-emerald-700/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-emerald-900/60 rounded-full flex items-center justify-center">
                      <Eye className="w-5 h-5 text-emerald-400"/>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-emerald-300">OBSERVE (Observer)</span>
                      <p className="text-[9px] text-slate-500">Phase de Perception</p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="p-2 bg-slate-900/50 rounded text-[9px]">
                      <span className="text-emerald-400 font-bold">→</span>
                      <span className="text-slate-400 ml-1">Collecter les résultats</span>
                    </div>
                    <div className="p-2 bg-slate-900/50 rounded text-[9px]">
                      <span className="text-emerald-400 font-bold">→</span>
                      <span className="text-slate-400 ml-1">Mettre à jour l'état interne</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2">
                  <RefreshCw className="w-5 h-5 text-yellow-500 animate-spin"/>
                  <span className="text-xs font-bold text-yellow-400">Continuer jusqu'à atteindre le but</span>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-r from-emerald-950/30 to-cyan-950/30 border border-emerald-700/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400"/>
                    <span className="text-xs font-bold text-emerald-300">Résultat Final</span>
                  </div>
                </div>
                <p className="text-[9px] text-slate-400 mt-1">Exécution complète avec trace de raisonnement</p>
              </div>
            </div>
          ),
        },
        {
          title: "5. LangChain vs LangGraph",
          text: "LangChain permet de créer rapidement des apps LLM. LangGraph permet des workflows avancés avec cycles et mémoire.",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-blue-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <GitBranch className="w-5 h-5 text-blue-400"/>
                <span className="text-sm font-bold text-blue-400 tracking-wider uppercase">Comparaison des Frameworks</span>
              </div>
              <div className="p-4 bg-blue-950/20 border border-blue-700/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-900/60 rounded-full flex items-center justify-center">
                      <Workflow className="w-5 h-5 text-blue-400"/>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-blue-300">LangChain</span>
                      <p className="text-[9px] text-slate-500">Pipeline Linéaire</p>
                    </div>
                  </div>
                  <div className="px-2 py-0.5 bg-blue-900/40 rounded text-[9px] font-bold text-blue-300">SIMPLE</div>
                </div>
                <div className="p-3 bg-slate-900 rounded border border-slate-700">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex-1 p-2 bg-blue-950/30 rounded border border-blue-700/30">
                      <div className="flex items-center gap-1 mb-1">
                        <MessageSquare className="w-3 h-3 text-blue-400"/>
                        <span className="text-[9px] font-bold text-blue-300">Entrée</span>
                      </div>
                      <p className="text-[8px] text-slate-500">Requête</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-500"/>
                    <div className="flex-1 p-2 bg-purple-950/30 rounded border border-purple-700/30">
                      <div className="flex items-center gap-1 mb-1">
                        <Bot className="w-3 h-3 text-purple-400"/>
                        <span className="text-[9px] font-bold text-purple-300">LLM</span>
                      </div>
                      <p className="text-[8px] text-slate-500">Traitement</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-500"/>
                    <div className="flex-1 p-2 bg-emerald-950/30 rounded border border-emerald-700/30">
                      <div className="flex items-center gap-1 mb-1">
                        <Zap className="w-3 h-3 text-emerald-400"/>
                        <span className="text-[9px] font-bold text-emerald-300">Sortie</span>
                      </div>
                      <p className="text-[8px] text-slate-500">Réponse</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="p-2 bg-slate-900 rounded text-[9px]">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-400 ml-1">Facile à apprendre</span>
                  </div>
                  <div className="p-2 bg-slate-900 rounded text-[9px]">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-400 ml-1">Prototypage rapide</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="flex-1 h-[1px] bg-slate-700"></div>
                <div className="px-3 py-1 bg-slate-900 rounded-full border border-slate-700">
                  <span className="text-xs font-bold text-slate-400">VS</span>
                </div>
                <div className="flex-1 h-[1px] bg-slate-700"></div>
              </div>
              <div className="p-4 bg-purple-950/20 border border-purple-700/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-900/60 rounded-full flex items-center justify-center">
                      <GitBranch className="w-5 h-5 text-purple-400"/>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-purple-300">LangGraph</span>
                      <p className="text-[9px] text-slate-500">Graphe Cyclique</p>
                    </div>
                  </div>
                  <div className="px-2 py-0.5 bg-purple-900/40 rounded text-[9px] font-bold text-purple-300">AVANCÉ</div>
                </div>
                <div className="p-3 bg-slate-900 rounded border border-slate-700 relative">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-2 bg-purple-950/30 rounded border border-purple-700/30 text-center">
                      <div className="w-6 h-6 bg-purple-900 rounded-full mx-auto mb-1 flex items-center justify-center">
                        <Circle className="w-3 h-3 text-purple-400"/>
                      </div>
                      <span className="text-[9px] font-bold text-purple-300">Nœud A</span>
                      <p className="text-[8px] text-slate-500 mt-0.5">Processus</p>
                    </div>
                    <div className="p-2 bg-purple-950/30 rounded border border-purple-700/30 text-center">
                      <div className="w-6 h-6 bg-purple-900 rounded-full mx-auto mb-1 flex items-center justify-center">
                        <Square className="w-3 h-3 text-purple-400"/>
                      </div>
                      <span className="text-[9px] font-bold text-purple-300">Nœud B</span>
                      <p className="text-[8px] text-slate-500 mt-0.5">Décision</p>
                    </div>
                    <div className="p-2 bg-purple-950/30 rounded border border-purple-700/30 text-center">
                      <div className="w-6 h-6 bg-purple-900 rounded-full mx-auto mb-1 flex items-center justify-center">
                        <Triangle className="w-3 h-3 text-purple-400"/>
                      </div>
                      <span className="text-[9px] font-bold text-purple-300">Nœud C</span>
                      <p className="text-[8px] text-slate-500 mt-0.5">Action</p>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8">
                    <RefreshCw className="w-4 h-4 text-purple-500 animate-spin"/>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="p-2 bg-slate-900 rounded text-[9px]">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span className="text-slate-400 ml-1">Workflows cycliques</span>
                  </div>
                  <div className="p-2 bg-slate-900 rounded text-[9px]">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span className="text-slate-400 ml-1">Gestion d'état</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-blue-400"/>
                  <span className="text-xs font-bold text-blue-300">Quand utiliser ?</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-[9px]">
                  <div className="p-2 bg-blue-950/20 rounded border border-blue-700/30">
                    <span className="text-blue-400 font-bold">LangChain:</span>
                    <span className="text-slate-400 ml-1">Chatbots simples, RAG</span>
                  </div>
                  <div className="p-2 bg-purple-950/20 rounded border border-purple-700/30">
                    <span className="text-purple-400 font-bold">LangGraph:</span>
                    <span className="text-slate-400 ml-1">Multi-agents, ReAct</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "6. Model Context Protocol (MCP)",
          text: "MCP est un standard permettant de connecter les LLMs aux outils externes (APIs, DB, IoT).",
          schema: (
            <div className="w-full bg-slate-950 rounded-xl border border-emerald-500/20 p-6 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Network className="w-5 h-5 text-emerald-400"/>
                <span className="text-sm font-bold text-emerald-400 tracking-wider uppercase">Architecture MCP</span>
              </div>
              <div className="p-4 bg-blue-950/20 border border-blue-700/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-900/60 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-blue-400"/>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-blue-300">Couche Client IA</span>
                      <p className="text-[9px] text-slate-500">Applications LLM</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 bg-slate-900 rounded border border-slate-700 text-center">
                    <div className="w-6 h-6 bg-blue-900/60 rounded-full mx-auto mb-1 flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-blue-400"/>
                    </div>
                    <span className="text-[9px] font-bold text-blue-300">Claude</span>
                    <p className="text-[8px] text-slate-500">Anthropic</p>
                  </div>
                  <div className="p-2 bg-slate-900 rounded border border-slate-700 text-center">
                    <div className="w-6 h-6 bg-blue-900/60 rounded-full mx-auto mb-1 flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-blue-400"/>
                    </div>
                    <span className="text-[9px] font-bold text-blue-300">GPT-4</span>
                    <p className="text-[8px] text-slate-500">OpenAI</p>
                  </div>
                  <div className="p-2 bg-slate-900 rounded border border-slate-700 text-center">
                    <div className="w-6 h-6 bg-blue-900/60 rounded-full mx-auto mb-1 flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-blue-400"/>
                    </div>
                    <span className="text-[9px] font-bold text-blue-300">Custom</span>
                    <p className="text-[8px] text-slate-500">Tout LLM</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <ChevronRight className="w-5 h-5 text-emerald-500 rotate-90"/>
                  <span className="text-[8px] text-emerald-400 font-bold">JSON-RPC</span>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-emerald-950/30 to-teal-950/30 border border-emerald-700/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-900/60 rounded-full flex items-center justify-center">
                      <Share2 className="w-5 h-5 text-emerald-400"/>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-emerald-300">Pont MCP</span>
                      <p className="text-[9px] text-slate-500">Gestionnaire de Protocole</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-slate-900/50 rounded border border-slate-700">
                  <div className="grid grid-cols-2 gap-3 text-[9px]">
                    <div className="p-2 bg-emerald-950/30 rounded border border-emerald-700/30">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span className="text-slate-400 ml-1">Routage des requêtes</span>
                    </div>
                    <div className="p-2 bg-emerald-950/30 rounded border border-emerald-700/30">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span className="text-slate-400 ml-1">Authentification</span>
                    </div>
                    <div className="p-2 bg-emerald-950/30 rounded border border-emerald-700/30">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span className="text-slate-400 ml-1">Traduction protocole</span>
                    </div>
                    <div className="p-2 bg-emerald-950/30 rounded border border-emerald-700/30">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span className="text-slate-400 ml-1">Gestion erreurs</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <ChevronRight className="w-5 h-5 text-emerald-500 rotate-90"/>
                  <span className="text-[8px] text-emerald-400 font-bold">Appels API</span>
                </div>
              </div>
              <div className="p-4 bg-purple-950/20 border border-purple-700/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-900/60 rounded-full flex items-center justify-center">
                      <Boxes className="w-5 h-5 text-purple-400"/>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-purple-300">Serveurs MCP</span>
                      <p className="text-[9px] text-slate-500">Fournisseurs d'Outils</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-amber-900/60 rounded flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-amber-400"/>
                      </div>
                      <span className="text-[10px] font-bold text-amber-300">Fichiers</span>
                    </div>
                    <div className="space-y-1">
                      <div className="p-1.5 bg-slate-800/50 rounded text-[8px] text-slate-400">
                        <span className="text-amber-400">→</span> Lecture/Écriture
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-cyan-900/60 rounded flex items-center justify-center">
                        <Database className="w-4 h-4 text-cyan-400"/>
                      </div>
                      <span className="text-[10px] font-bold text-cyan-300">Base de Données</span>
                    </div>
                    <div className="space-y-1">
                      <div className="p-1.5 bg-slate-800/50 rounded text-[8px] text-slate-400">
                        <span className="text-cyan-400">→</span> Requêtes SQL
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-blue-900/60 rounded flex items-center justify-center">
                        <Network className="w-4 h-4 text-blue-400"/>
                      </div>
                      <span className="text-[10px] font-bold text-blue-300">APIs Externes</span>
                    </div>
                    <div className="space-y-1">
                      <div className="p-1.5 bg-slate-800/50 rounded text-[8px] text-slate-400">
                        <span className="text-blue-400">→</span> REST/GraphQL
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-900 rounded border border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-emerald-900/60 rounded flex items-center justify-center">
                        <Wifi className="w-4 h-4 text-emerald-400"/>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-300">IoT</span>
                    </div>
                    <div className="space-y-1">
                      <div className="p-1.5 bg-slate-800/50 rounded text-[8px] text-slate-400">
                        <span className="text-emerald-400">→</span> Données capteurs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-r from-emerald-950/20 to-cyan-950/20 border border-emerald-700/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-emerald-400"/>
                  <span className="text-xs font-bold text-emerald-300">Avantages du MCP</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[9px]">
                  <div className="p-1.5 bg-slate-900/50 rounded">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span className="text-slate-400 ml-1">Interface standardisée</span>
                  </div>
                  <div className="p-1.5 bg-slate-900/50 rounded">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span className="text-slate-400 ml-1">Outils Plug-and-play</span>
                  </div>
                  <div className="p-1.5 bg-slate-900/50 rounded">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span className="text-slate-400 ml-1">Sécurité & Auth</span>
                  </div>
                  <div className="p-1.5 bg-slate-900/50 rounded">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span className="text-slate-400 ml-1">Architecture scalable</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
  }
];

export default function DashboardSMA() {
  const [activeTab, setActiveTab] = useState(null);
  const currentChapter = chapters.find(c => c.id === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 flex flex-col font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <button onClick={() => setActiveTab(null)} className="flex items-center gap-4 hover:opacity-80 transition-opacity group">
            <div className="p-2.5 bg-slate-900 rounded-xl border border-cyan-500/30 group-hover:border-cyan-400 transition-colors relative overflow-hidden">
              <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-400/20 transition-colors"></div>
              <Network className="w-6 h-6 text-cyan-400 relative z-10"/>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-black tracking-wider text-slate-100 uppercase">Hub <span className="text-cyan-400">SMA</span></h1>
              <p className="text-[10px] text-cyan-500/80 font-mono tracking-widest uppercase flex items-center gap-1"><Activity className="w-3 h-3"/> Systèmes Multi-Agents</p>
            </div>
          </button>
          <nav className="flex flex-wrap justify-center gap-2">
            {chapters.map((chapter) => {
              const isActive = chapter.id === activeTab;
              return (
                <button
                  key={chapter.id}
                  onClick={() => setActiveTab(chapter.id)}
                  className={`px-4 py-2 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all duration-300 border ${
                    isActive 
                      ? `bg-slate-800 text-white ${chapter.border} shadow-[0_0_15px_rgba(0,0,0,0.5)] relative overflow-hidden` 
                      : 'bg-transparent text-slate-400 border-slate-800 hover:border-slate-600 hover:text-slate-200'
                  }`}
                >
                  {isActive && <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r ${chapter.color}`}></div>}
                  {chapter.short}
                </button>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="flex-1 flex flex-col w-full relative">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-6xl mx-auto w-full p-4 md:p-8 relative z-10 flex-1 flex flex-col">
          {!currentChapter && (
            <div className="flex-1 flex flex-col items-center justify-center animate-fadeIn py-12">
              <div className="relative w-80 h-80 flex items-center justify-center mb-12">
                <div className="absolute z-10 w-28 h-28 bg-slate-900 rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.3)] border border-cyan-500/50">
                  <span className="text-3xl font-black text-white tracking-tighter">SMA</span>
                  <span className="text-[9px] text-cyan-400 font-mono tracking-widest mt-1">EN LIGNE</span>
                </div>
                <div className="absolute inset-0 rounded-full border border-slate-700/50 animate-[spin_30s_linear_infinite]">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 p-3 bg-slate-900 rounded-full border border-indigo-500/50 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)] animate-[spin_30s_linear_infinite_reverse]"><BrainCircuit size={24}/></div>
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 p-3 bg-slate-900 rounded-full border border-amber-500/50 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)] animate-[spin_30s_linear_infinite_reverse]"><Cpu size={24}/></div>
                  <div className="absolute top-1/2 -left-5 -translate-y-1/2 p-3 bg-slate-900 rounded-full border border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] animate-[spin_30s_linear_infinite_reverse]"><Network size={24}/></div>
                  <div className="absolute top-1/2 -right-5 -translate-y-1/2 p-3 bg-slate-900 rounded-full border border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)] animate-[spin_30s_linear_infinite_reverse]"><Bot size={24}/></div>
                </div>
                <div className="absolute inset-8 rounded-full border border-dashed border-slate-700/50 animate-[spin_40s_linear_infinite_reverse]"></div>
              </div>
              <div className="text-center max-w-2xl bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
                <h2 className="text-2xl font-black text-white mb-4 tracking-wide">Intelligence Artificielle Distribuée</h2>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  Une architecture où un ensemble d'entités autonomes interagissent au sein d'un environnement cyber-physique pour résoudre des problèmes complexes inaccessibles à un algorithme monolithique.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-cyan-950/30 border border-cyan-900/50 rounded-full">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
                  <p className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">Initialisation requise : Sélectionnez un module</p>
                </div>
              </div>
            </div>
          )}
          {currentChapter && (
            <div className="w-full space-y-6 animate-fadeIn">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 bg-gradient-to-br ${currentChapter.color} rounded-xl shadow-lg`}>
                  <currentChapter.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white tracking-wide">{currentChapter.title}</h2>
                  <p className="text-slate-400 text-sm font-mono mt-1">{currentChapter.content.subtitle}</p>
                </div>
              </div>
              <div className="space-y-6">
                {currentChapter.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className={`p-6 bg-slate-900 rounded-xl border ${currentChapter.border} shadow-lg relative overflow-hidden group`}>
                      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${currentChapter.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                      <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                        <Activity className="w-4 h-4 opacity-50"/>
                        {sec.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{sec.text}</p>
                    </div>
                    {sec.schema && (
                      <div className="animate-fadeIn">
                        {sec.schema}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {currentChapter.content.schema && (
                <div className="mt-8">
                  {currentChapter.content.schema}
                </div>
              )}
              {/* 📸 IMAGE DE RÉSUMÉ DU CHAPITRE */}
              {currentChapter.coverImage && (
  <div className="mt-12">
    <img 
      src={currentChapter.coverImage} 
      alt={`Illustration du chapitre: ${currentChapter.title}`}
      className="w-full rounded-xl"
    />
  </div>
)}
            </div>
          )}
        </div>
      </main>
      <footer className="relative z-20 border-t border-slate-800/80 bg-slate-950 py-6 text-center">
        <p className="text-xs font-black text-slate-300 uppercase tracking-[0.2em]">
          École Nationale de l'Intelligence Artificielle et du Digital <span className="text-cyan-500 opacity-50">/</span> ENIAD
        </p>
        <p className="text-[10px] text-slate-500 font-mono tracking-widest mt-2 uppercase">
          Filière <span className="text-amber-500">Robotique et Objets Connectés (ROC)</span>
        </p>
        <div className="mt-6 inline-flex flex-col items-center">
          <div className="w-12 h-[1px] bg-slate-800 mb-4"></div>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest flex items-center gap-2">
            Système déployé par <span className="font-bold text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/50">Khawla Gueddouri</span>
          </p>
        </div>
      </footer>
    </div>
  );
}