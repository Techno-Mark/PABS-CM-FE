import React from 'react'

type DrawerOverlayProps = {
  isOpen: boolean
  className?: string
}

const DrawerOverlay = ({ isOpen, className }: DrawerOverlayProps) => {
  if (!isOpen) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-20 bg-black opacity-40 ${className}`}
    />
  )
}

export default DrawerOverlay
