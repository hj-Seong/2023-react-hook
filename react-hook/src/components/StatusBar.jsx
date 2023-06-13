import React from 'react'
import { useOnlineStatus } from '../hook/useOnlineStatus'

export default function StatusBar() {
  const isOnline = useOnlineStatus();
  return (
    <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
  )
}
