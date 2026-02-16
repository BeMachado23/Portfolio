"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Contact() {
    const [nameVisible, setNameVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setNameVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(element);
        return () => {
            observer.disconnect();
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "2280c16f-df33-45c9-a4a9-8130d228ffac",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    to_email: "bemachado.floripa@gmail.com",
                }),
            });

            const result = await response.json();
            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="contact" ref={sectionRef} className="relative w-full min-h-screen overflow-hidden py-16 sm:py-20">
            {/* Title */}
            <div className={`relative md:absolute md:top-20 xl:top-24 2xl:top-28 md:left-1/2 md:-translate-x-1/2 text-center mb-8 md:mb-0 ${nameVisible ? "animate-fade-scale" : "opacity-0"}`}>
                <h2>
                    <span className="text-neutral-400 text-xl sm:text-2xl md:text-xl xl:text-2xl 2xl:text-3xl italic font-bold tracking-wide block mb-1 xl:mb-2">LET´S</span>
                    <span className="text-[#966DCE] text-3xl sm:text-4xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight text-shadow-white block">CONNECT</span>
                </h2>
            </div>

            {/* GIF Image - Left side - Hidden on mobile */}
            <div className="hidden md:block absolute left-0 bottom-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Contact.gif" alt="Contact Glitch Art" className="object-contain w-[280px] lg:w-[420px] xl:w-[450px] 2xl:w-[640px] h-auto" />
            </div>

            {/* Form - Centered on mobile, Right side on desktop */}
            <div className={`relative md:absolute px-6 sm:px-8 md:px-0 md:right-8 lg:right-16 xl:right-24 2xl:right-48 md:top-1/2 md:-translate-y-1/3 w-full max-w-md mx-auto md:mx-0 md:max-w-sm xl:max-w-md 2xl:max-w-2xl ${nameVisible ? "animate-slide-from-right" : "opacity-0"}`}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5 xl:gap-6 2xl:gap-10">
                    {/* Name Input */}
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="YOUR NAME"
                            required
                            className="w-full bg-transparent border-b-2 md:border-b-3 2xl:border-b-4 rounded border-[#966DCE] text-white py-2 md:py-2.5 2xl:py-4 text-xs md:text-sm 2xl:text-base tracking-wider placeholder:text-neutral-500 focus:outline-none focus:border-[#c9b3e8] transition-colors"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="YOUR EMAIL ADDRESS"
                            required
                            className="w-full bg-transparent border-b-2 md:border-b-3 2xl:border-b-4 rounded border-[#966DCE] text-white py-2 md:py-2.5 2xl:py-4 text-xs md:text-sm 2xl:text-base tracking-wider placeholder:text-neutral-500 focus:outline-none focus:border-[#c9b3e8] transition-colors"
                        />
                    </div>

                    {/* Message Textarea */}
                    <div className="relative">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="WHAT CAN I HELP FOR YOU?"
                            required
                            rows={4}
                            className="w-full bg-transparent border-b-2 md:border-b-3 2xl:border-b-4 rounded border-[#966DCE] text-white py-2 md:py-2.5 2xl:py-4 text-xs md:text-sm 2xl:text-base tracking-wider placeholder:text-neutral-500 focus:outline-none focus:border-[#c9b3e8] transition-colors resize-none 2xl:rows-6"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-2.5 md:py-3 2xl:py-5 mt-2 md:mt-3 2xl:mt-6 border-2 border-[#966DCE] rounded-full text-white text-sm md:text-base 2xl:text-lg font-semibold tracking-wider hover:bg-[#966DCE]/20 hover:border-[#966DCE] transition-all duration-300 disabled:opacity-50"
                    >
                        {status === "loading" ? "SENDING..." : "SEND"}
                    </button>

                    {/* Status Messages */}
                    {status === "success" && (
                        <p className="text-green-500 text-center text-sm">Message sent successfully!</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-500 text-center text-sm">Failed to send. Please try again.</p>
                    )}
                </form>
            </div>

            {/* Footer - Social Media & Copyright */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-8 text-center">
                <p className="text-neutral-400 text-xs sm:text-sm font-bold italic tracking-wider mb-3">SOCIAL MEDIAS</p>
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
                    <a
                        href="https://www.linkedin.com/in/bernardo-machado-80749a231/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                    >
                        <Image src="/images/linkedin_logo.png" alt="LinkedIn" width={28} height={28} className="md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" />
                    </a>
                    <a
                        href="https://github.com/BeMachado23"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                    >
                        <Image src="/images/github_logo.png" alt="GitHub" width={28} height={28} className="md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" />
                    </a>
                    <a
                        href="https://wa.me/5548984637448"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                    >
                        <Image src="/images/whatsapp.png" alt="WhatsApp" width={28} height={28} className="md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" />
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&to=bemachado.floripa@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                    >
                        <Image src="/images/gmail.png" alt="Gmail" width={28} height={28} className="md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" />
                    </a>
                </div>
                <p className="text-neutral-500 text-xs">@Bernardo Machado 2025</p>
            </div>
        </section>
    );
}