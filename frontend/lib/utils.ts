/** 
 * Un helper per concatenare classi CSS in modo sicuro:
 * filtra eventuali valori falsy e li unisce con uno spazio.
 */
export function cn(...classes: (string | undefined | false)[]): string {
    return classes.filter(Boolean).join(' ');
  }
  