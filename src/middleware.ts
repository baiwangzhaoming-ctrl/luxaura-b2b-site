import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // 支持的语言列表
  locales: ['en', 'zh'],
  // 默认语言
  defaultLocale: 'en'
});

export const config = {
  // 匹配所有需要国际化的路由
  matcher: ['/', '/(zh|en)/:path*']
};
