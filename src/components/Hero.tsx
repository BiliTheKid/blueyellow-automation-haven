import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-primary-light/10 to-transparent">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="bg-primary-yellow/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
            Automation Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Transform Your Business with Automation
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your operations and boost efficiency with our cutting-edge automation services
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHpNNDAgMzBoNHY0aC00ek00NCAzNGg0djRoLTR6TTQ4IDMwaDR2NGgtNHpNNTIgMzRoNHY0aC00ek0zNiAzOGg0djRoLTR6TTQwIDQyaDR2NGgtNHpNNDQgMzhoNHY0aC00ek00OCA0MmhNNTIgMzhoNHY0aC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
    </section>
  );
};