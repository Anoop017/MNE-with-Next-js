import { MneLogo } from "@/components/mne-logo";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="relative flex items-center justify-center">
            <div className="absolute h-48 w-48 animate-spin rounded-full border-t-4 border-b-4 border-accent"></div>
            <MneLogo />
        </div>
        <p className="mt-8 font-headline text-xl text-primary animate-pulse">
            Loading...
        </p>
    </div>
  );
}
