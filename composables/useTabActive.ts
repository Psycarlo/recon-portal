import type { RouteNamedMapI18n } from 'vue-router/auto-routes'

export const useTabActive = () => {
  const route = useRoute()
  const localeRoute = useLocaleRoute()

  const currentRouteNormalizedName = ref(String(route.name).split('___')[0])

  watch(route, (newRoute) => {
    currentRouteNormalizedName.value = String(newRoute.name).split('___')[0]
  })

  function isTabActive(route: keyof RouteNamedMapI18n) {
    return currentRouteNormalizedName.value.includes(
      localeRoute(route)?.name.split('___')[0] || '',
    )
  }

  return {
    isTabActive,
  }
}
