import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-light/5 via-primary/5 to-primary-yellow/10">
      {/* Circuit-like pattern background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyIiBmaWxsPSIjMzNDM0YwIiBmaWxsLW9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik01MCA0OGgyNXYySDUwdi0yeiIgZmlsbD0iIzMzQzNGMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNNTAgNzNoMjV2Mkg1MHYtMnoiIGZpbGw9IiMzM0MzRjAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTI1IDQ4aDI1djJIMjV2LTJ6IiBmaWxsPSIjMzNDM0YwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-30" />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "linear-gradient(to right, #243949 0%, #517fa4 100%)",
        }}
      />

      {/* Animated flow lines */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-1 bg-gradient-to-r from-primary-light/0 via-primary-light/20 to-primary-light/0 animate-[slide_3s_linear_infinite]" style={{ top: '20%' }} />
        <div className="absolute w-full h-1 bg-gradient-to-r from-primary-light/0 via-primary-light/20 to-primary-light/0 animate-[slide_4s_linear_infinite]" style={{ top: '40%' }} />
        <div className="absolute w-full h-1 bg-gradient-to-r from-primary-light/0 via-primary-light/20 to-primary-light/0 animate-[slide_5s_linear_infinite]" style={{ top: '60%' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="bg-primary-yellow/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-6 mt-8">
            פתרונות אוטומציה
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            בעלי עסקים? תנו לטכנולוגיה לעבוד בשבילכם
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            לא נמאס לכם להתעסק בתהליכים ידניים שגוזלים את הזמן היקר שלכם?
          </p>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            תנו לנו לעזור לכם לייעל את העסק שלכם בעזרת שירותי האוטומציה המתקדמים שלנו
          </p>
        </motion.div>
      </div>
    </section>
  );
};