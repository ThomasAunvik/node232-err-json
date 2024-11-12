import { format } from "date-fns";
import { nb } from "date-fns/locale";

console.log(format(Date.now(), "d. LLLL y", { locale: nb }))