import { defineComponent } from "vue";

export default defineComponent({
    name:"images-svg",
    setup() {
        return () => <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-1.25 0-2.125-.875T2 19V5q0-1.25.875-2.125T5 2h14q1.25 0 2.125.875T22 5v14q0 1.25-.875 2.125T19 22Zm0-2h14q.425 0 .712-.288Q20 19.425 20 19V5q0-.425-.288-.713Q19.425 4 19 4H5q-.425 0-.713.287Q4 4.575 4 5v14q0 .425.287.712Q4.575 20 5 20Zm1-2l4-4l1.8 1.775L14 13l4 5Zm2-8q-.825 0-1.412-.588Q6 8.825 6 8t.588-1.412Q7.175 6 8 6t1.413.588Q10 7.175 10 8t-.587 1.412Q8.825 10 8 10Z"/></svg>
    }
})