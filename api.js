// خادم بسيط يعمل على GitHub Pages
export default {
  async fetch(request) {
    // معالجة طلبات API
    if (request.method === 'POST' && new URL(request.url).pathname === '/api/save') {
      try {
        const data = await request.json();
        
        // هنا يمكنك إرسال البيانات إلى بريدك الإلكتروني
        // أو حفظها في قاعدة بيانات خارجية
        
        return new Response(JSON.stringify({
          success: true,
          message: 'تم استلام البيانات',
          received: data
        }), {
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (error) {
        return new Response(JSON.stringify({
          success: false,
          error: error.message
        }), { status: 500 });
      }
    }
    
    // عرض الصفحة الرئيسية
    return new Response('يرجى زيارة صفحة تسجيل الدخول', {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
};
