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
        <section id="contact" ref={sectionRef} className="relative w-full min-h-screen overflow-hidden py-20">
            {/* Title */}
            <div className={`absolute top-20 left-1/2 -translate-x-1/2 text-center ${nameVisible ? "animate-fade-scale" : "opacity-0"}`}>
                <h2>
                    <span className="text-neutral-400 text-2xl md:text-3xl italic font-bold tracking-wide block mb-2">LET'S</span>
                    <span className="text-[#966DCE] text-4xl md:text-5xl font-bold tracking-tight text-shadow-white block">CONNECT</span>
                </h2>
            </div>

            {/* GIF Image - Left side */}
            <div className="absolute left-0 bottom-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Contact.gif" alt="Contact Glitch Art" width={640} height={876} className="object-contain" />
            </div>

            {/* Form - Right side */}
            <div className={`absolute right-12 lg:right-24 xl:right-102 top-1/2 -translate-y-1/3 w-full max-w-lg ${nameVisible ? "animate-slide-from-right" : "opacity-0"}`}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    {/* Name Input */}
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="YOUR NAME"
                            required
                            className="w-full bg-transparent border-b-4 rounded border-[#966DCE] text-white py-3 text-sm tracking-wider placeholder:text-neutral-500 focus:outline-none focus:border-[#c9b3e8] transition-colors"
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
                            className="w-full bg-transparent border-b-4 rounded border-[#966DCE] text-white py-3 text-sm tracking-wider placeholder:text-neutral-500 focus:outline-none focus:border-[#c9b3e8] transition-colors"
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
                            rows={6}
                            className="w-full bg-transparent border-b-4 rounded border-[#966DCE] text-white py-3 text-sm tracking-wider placeholder:text-neutral-500 focus:outline-none focus:border-[#c9b3e8] transition-colors resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-4 mt-4 border-2 border-[#966DCE] rounded-full text-white font-semibold tracking-wider hover:bg-[#966DCE]/20 hover:border-[#966DCE] transition-all duration-300 disabled:opacity-50"
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
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                <p className="text-neutral-400 text-sm font-bold italic tracking-wider mb-3">SOCIAL MEDIAS</p>
                <div className="flex items-center justify-center gap-4 mb-4">
                    <a
                        href="https://www.linkedin.com/in/bernardo-machado-80749a231/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                    >
                        <Image src="/images/linkedin_logo.png" alt="LinkedIn" width={32} height={32} />
                    </a>
                    <a
                        href="https://github.com/BeMachado23"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                    >
                        <Image src="/images/github_logo.png" alt="GitHub" width={32} height={32} />
                    </a>
                    <a
                        href="https://wa.me/5548984637448"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                    >
                        <Image src="/images/whatsapp.png" alt="WhatsApp" width={32} height={32} />
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&to=bemachado.floripa@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                    >
                        <Image src="/images/gmail.png" alt="Gmail" width={32} height={32} />
                    </a>
                </div>
                <p className="text-neutral-500 text-xs">@Bernardo Machado 2025</p>
            </div>
        </section>
    );
}