import React from 'react';
import {
    Play,
    ChevronRight,
    ShieldCheck,
    Users,
    Star,
    Headphones,
    Search,
    CheckCircle,
    Video,
    Mic,
    PhoneOff
} from 'lucide-react';
import { StepCard } from '@/components/StepCard';

export const HowItWorks: React.FC = () => {
    return (
        <section id='how-it-works' className="relative w-full bg-slate-50/40 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-6">
                        <Play className="w-3.5 h-3.5 fill-blue-600" />
                        <span>কীভাবে কাজ করে</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                        সহজ কিছু ধাপে <br />
                        <span className="text-blue-600">তোমার শেখার যাত্রা শুরু</span>
                    </h2>

                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                        পড়াতে চাই - এ শেখা শুরু করা যতটা সহজ, ততটাই নিরাপদ। <br />
                        কয়েকটি ধাপেই তুমি পেয়ে যাবে তোমার পছন্দের মেন্টর এবং শুরু করতে পারবে ক্লাস।
                    </p>
                </div>

                {/* 5-Step Process Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative mb-16 items-stretch">

                    {/* Step 1 */}
                    <div className="relative">
                        <StepCard
                            stepNumber="01"
                            title="তোমার জন্য সঠিক মেন্টর খুঁজে নাও"
                            description="বিভিন্ন বিষয়ের অভিজ্ঞ মেন্টরদের প্রোফাইল দেখো, রিভিউ পড়ো এবং তোমার প্রয়োজন অনুযায়ী বেছে নাও।"
                            bgColor="bg-blue-50/30"
                            badgeBgColor="bg-blue-100"
                            badgeTextColor="text-blue-600"
                        >
                            {/* Card Graphic Preview */}
                            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 w-full space-y-2">
                                <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 text-[10px] text-slate-400">
                                    <Search className="w-3 h-3 text-slate-400" />
                                    <span>কোন বিষয় শিখতে চান?</span>
                                </div>
                                <div className="flex items-center gap-2.5 bg-slate-50/50 p-2 rounded-xl">
                                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80" className="w-8 h-8 rounded-full object-cover" alt="Rafid" />
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <span className="font-bold text-[11px] text-slate-800">Rafid Hasan</span>
                                            <CheckCircle className="w-3 h-3 text-blue-500 fill-blue-500 text-white" />
                                        </div>
                                        <p className="text-[9px] text-slate-400">Physics</p>
                                        <div className="flex items-center gap-1 text-[9px] text-amber-500 font-semibold">
                                            <Star className="w-2.5 h-2.5 fill-amber-400" />
                                            <span>4.9</span>
                                            <span className="text-slate-400 font-normal">(320 reviews)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5 bg-slate-50/50 p-2 rounded-xl">
                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" className="w-8 h-8 rounded-full object-cover" alt="Nusrat" />
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <span className="font-bold text-[11px] text-slate-800">Nusrat Jahan</span>
                                            <CheckCircle className="w-3 h-3 text-blue-500 fill-blue-500 text-white" />
                                        </div>
                                        <p className="text-[9px] text-slate-400">English</p>
                                        <div className="flex items-center gap-1 text-[9px] text-amber-500 font-semibold">
                                            <Star className="w-2.5 h-2.5 fill-amber-400" />
                                            <span>4.8</span>
                                            <span className="text-slate-400 font-normal">(214 reviews)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </StepCard>
                        {/* Arrow separator (hidden on small screens) */}
                        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-blue-100 border border-white items-center justify-center text-blue-600 shadow-sm">
                            <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                        <StepCard
                            stepNumber="02"
                            title="আগাম পেমেন্ট করো"
                            description="তোমার সেশন বুক করার আগে নিরাপদ পেমেন্ট গেটওয়ের মাধ্যমে পেমেন্ট করো।"
                            bgColor="bg-emerald-50/30"
                            badgeBgColor="bg-emerald-100"
                            badgeTextColor="text-emerald-600"
                        >
                            <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-slate-100 w-full space-y-2">
                                <span className="text-[10px] font-bold text-slate-700 block">Select Payment Method</span>
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] text-slate-600 p-1.5 border border-slate-100 rounded-lg cursor-pointer">
                                        <input type="radio" name="payment" defaultChecked className="text-pink-500 focus:ring-0 w-3 h-3" />
                                        <span className="font-semibold text-pink-600">bKash</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-[10px] text-slate-600 p-1.5 border border-slate-100 rounded-lg cursor-pointer">
                                        <input type="radio" name="payment" className="text-orange-500 focus:ring-0 w-3 h-3" />
                                        <span className="font-semibold text-orange-600">Nagad</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-[10px] text-slate-600 p-1.5 border border-slate-100 rounded-lg cursor-pointer">
                                        <input type="radio" name="payment" className="text-blue-500 focus:ring-0 w-3 h-3" />
                                        <span className="font-semibold text-blue-600">Card</span>
                                    </label>
                                </div>
                                <button className="w-full bg-blue-600 text-white text-[10px] py-2 rounded-lg font-medium flex items-center justify-center gap-1">
                                    Pay ৳500 <ChevronRight className="w-3 h-3" />
                                </button>
                            </div>
                        </StepCard>
                        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-blue-100 border border-white items-center justify-center text-blue-600 shadow-sm">
                            <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative">
                        <StepCard
                            stepNumber="03"
                            title="টাকা থাকে এসক্রোতে"
                            description="তোমার পেমেন্ট নিরাপদে এসক্রোতে রাখা হয়। ক্লাস শেষ করার পর মেন্টর পেমেন্ট পান।"
                            bgColor="bg-indigo-50/30"
                            badgeBgColor="bg-indigo-100"
                            badgeTextColor="text-indigo-600"
                        >
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 w-full text-center space-y-2">
                                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <p className="text-[10px] text-slate-400">Payment Held in Escrow</p>
                                <div className="text-lg font-bold text-slate-800">৳500</div>
                                <div className="text-[8px] text-slate-400 flex items-center justify-center gap-1">
                                    <span>Safe</span> • <span>Secure</span> • <span>Fair</span>
                                </div>
                            </div>
                        </StepCard>
                        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-blue-100 border border-white items-center justify-center text-blue-600 shadow-sm">
                            <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative">
                        <StepCard
                            stepNumber="04"
                            title="সেশন বুক করো"
                            description="তোমার সুবিধাজনক সময় বেছে নিয়ে ক্লাস সেশন বুক করো।"
                            bgColor="bg-amber-50/30"
                            badgeBgColor="bg-amber-100"
                            badgeTextColor="text-amber-600"
                        >
                            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 w-full space-y-2">
                                <span className="text-[10px] font-bold text-slate-700 block">Book a Session</span>
                                <div className="grid grid-cols-3 gap-1 text-center">
                                    <div className="p-1 rounded-lg border border-slate-100 text-[9px]">
                                        <div className="text-slate-400">Today</div>
                                        <div className="font-bold text-slate-700">Apr 25</div>
                                    </div>
                                    <div className="p-1 rounded-lg border border-blue-500 bg-blue-50 text-[9px]">
                                        <div className="text-blue-500">Tomorrow</div>
                                        <div className="font-bold text-blue-600">Apr 26</div>
                                    </div>
                                    <div className="p-1 rounded-lg border border-slate-100 text-[9px]">
                                        <div className="text-slate-400">Sun</div>
                                        <div className="font-bold text-slate-700">Apr 27</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-1.5 text-[9px] text-center">
                                    <div className="py-1 rounded border border-slate-100 text-slate-600">10:00 AM</div>
                                    <div className="py-1 rounded bg-blue-600 text-white font-medium">11:00 AM</div>
                                    <div className="py-1 rounded border border-slate-100 text-slate-600">02:00 PM</div>
                                    <div className="py-1 rounded border border-slate-100 text-slate-600">04:00 PM</div>
                                </div>
                                <button className="w-full bg-blue-600 text-white text-[9px] py-1.5 rounded-lg font-medium">
                                    Confirm Booking
                                </button>
                            </div>
                        </StepCard>
                        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-blue-100 border border-white items-center justify-center text-blue-600 shadow-sm">
                            <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div>
                        <StepCard
                            stepNumber="05"
                            title="সময়ে ক্লাসে যোগ দাও"
                            description="নির্ধারিত সময়ে লাইভ ক্লাসে যোগ দাও, প্রশ্ন করো, শেখো—এবং তোমার লক্ষ্য পূরণের পথে এগিয়ে যাও।"
                            bgColor="bg-blue-50/30"
                            badgeBgColor="bg-blue-100"
                            badgeTextColor="text-blue-600"
                        >
                            <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 w-full space-y-2">
                                <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-video flex items-center justify-center">
                                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover opacity-80" alt="Live Class" />
                                    <span className="absolute top-1.5 left-1.5 bg-emerald-500 text-white text-[8px] px-1.5 py-0.5 rounded-full flex items-center gap-1 font-semibold">
                                        <span className="w-1 h-1 rounded-full bg-white animate-ping"></span> Live
                                    </span>

                                    {/* Participant Grid Overlay */}
                                    <div className="absolute right-1 top-1 flex flex-col gap-1">
                                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" className="w-4 h-4 rounded border border-white object-cover" alt="Student" />
                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" className="w-4 h-4 rounded border border-white object-cover" alt="Student" />
                                    </div>

                                    {/* Controls */}
                                    <div className="absolute bottom-1.5 flex items-center gap-1.5 bg-slate-900/60 backdrop-blur px-2 py-0.5 rounded-full">
                                        <Mic className="w-2.5 h-2.5 text-white" />
                                        <Video className="w-2.5 h-2.5 text-white" />
                                        <PhoneOff className="w-2.5 h-2.5 text-red-400" />
                                    </div>
                                </div>
                            </div>
                        </StepCard>
                    </div>

                </div>

                {/* Bottom Benefits Bar */}
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-sm">100% নিরাপদ পেমেন্ট</h4>
                            <p className="text-xs text-slate-400">Escrow সিস্টেমের মাধ্যমে</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                            <Users className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-sm">হাজারো যাচাইকৃত মেন্টর</h4>
                            <p className="text-xs text-slate-400">সঠিক গাইড, নিশ্চিত শিক্ষা</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
                            <Star className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-sm">রিভিউ ও রেটিং</h4>
                            <p className="text-xs text-slate-400">অন্য শিক্ষার্থীদের অভিজ্ঞতা দেখুন</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                            <Headphones className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-sm">২৪/৭ সাপোর্ট</h4>
                            <p className="text-xs text-slate-400">যেকোনো সমস্যায় আমরা আছি</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;