// "use client"

// import { useEffect, useState } from "react"
// import { cn } from "@/lib/utils"

// interface AnimatedCircleProps {
//   className?: string
//   delay?: number
//   size?: "small" | "medium" | "large" | "default"
// }

// export default function AnimatedCircle({ className, delay = 0, size = "default" }: AnimatedCircleProps) {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null

//   // Size classes
//   const sizeClasses = {
//     small: "w-48 h-48 md:w-64 md:h-64",
//     default: "w-64 h-64 md:w-96 md:h-96",
//     medium: "w-80 h-80 md:w-[32rem] md:h-[32rem]",
//     large: "w-96 h-96 md:w-[40rem] md:h-[40rem]",
//   }

//   // Create a multi-layered circle with 4 layers of yellow
//   return (
//     <div className={cn("relative", className)}>
//       {/* Layer 1 (outermost) */}
//       <div
//         className={cn("absolute rounded-full opacity-20 animate-pulse-slow", sizeClasses[size], "bg-yellow-300")}
//         style={{
//           animationDelay: `${delay}s`,
//           animationDuration: "4s",
//           transform: "scale(1.3)",
//         }}
//       />

//       {/* Layer 2 */}
//       <div
//         className={cn("absolute rounded-full opacity-30 animate-pulse-medium", sizeClasses[size], "bg-yellow-400")}
//         style={{
//           animationDelay: `${delay + 0.2}s`,
//           animationDuration: "3.5s",
//           transform: "scale(1.15)",
//         }}
//       />

//       {/* Layer 3 */}
//       <div
//         className={cn("absolute rounded-full opacity-50 animate-pulse-fast", sizeClasses[size], "bg-yellow-500")}
//         style={{
//           animationDelay: `${delay + 0.4}s`,
//           animationDuration: "3s",
//           transform: "scale(1.05)",
//         }}
//       />

//       {/* Layer 4 (innermost) */}
//       <div
//         className={cn("rounded-full opacity-70 animate-pulse", sizeClasses[size], "bg-yellow-600")}
//         style={{
//           animationDelay: `${delay + 0.6}s`,
//           animationDuration: "2.5s",
//         }}
//       />
//     </div>
//   )
// }

