// src/hooks/useScrollSpy.js
import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      // A section is "active" once it crosses the middle of the viewport.
      { rootMargin: '-50% 0px -50% 0px' },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}