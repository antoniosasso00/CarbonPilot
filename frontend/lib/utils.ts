import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/** 
 * Un helper per concatenare classi CSS in modo sicuro:
 * filtra eventuali valori falsy e li unisce con uno spazio.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
  