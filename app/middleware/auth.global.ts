export default defineNuxtRouteMiddleware((to) => {
  const localeRoute = useLocaleRoute()
  const publicPaths = [localeRoute('login')?.path]
  const user = useSupabaseUser()
  const localePath = useLocalePath()

  if (!user.value && publicPaths.includes(to.path))
    return
  if (!user.value && !publicPaths.includes(to.path))
    return navigateTo(localePath('login'))
  if (user.value && publicPaths.includes(to.path))
    return navigateTo(localePath('index'))
})
