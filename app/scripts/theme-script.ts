// This script runs before React hydration to prevent FOUC (Flash of Unstyled Content)
// Applies theme class immediately based on localStorage or system preference
export const themeScript = `(function() {
  try {
    // Get theme from localStorage or detect system preference
    var theme = localStorage.getItem('theme');
    if (!theme) {
      var mediaQuery = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
      theme = mediaQuery && mediaQuery.matches ? 'dark' : 'light';
    }
    
    // Apply theme class to <html> element immediately
    var html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    
    // Handle language for initial render (AppContext will take over after hydration)
    var language = localStorage.getItem('language') || 
      (navigator.language && navigator.language.startsWith('ar') ? 'ar' : 'en');
    html.lang = language;
    html.dir = language === 'ar' ? 'rtl' : 'ltr';
  } catch (e) {
    // Fallback: ensure dark class is removed if script fails
    document.documentElement.classList.remove('dark');
  }
})();`;
