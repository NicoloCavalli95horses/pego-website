import { computed, onMounted, onUnmounted, ref } from "vue";

export function getViewport(){
  // const
  const width = ref( window.innerWidth );
  const device = computed(() => {
    if ( width.value < 550 ) {
      return "mobile";
    } else if ( width.value >= 550 && width.value < 1200 ) {
      return "tablet";
    } else if ( width.value >= 1200 ) {
      return "desktop";
    } else {
      return null;
    }
  });
  
  // life cycle
  onMounted(() => window.addEventListener("resize", onResize));
  onUnmounted(() => window.removeEventListener("resize", onResize));
  
  // function
  function onResize(){
    width.value = window.innerWidth;
  }

  return device;
}
