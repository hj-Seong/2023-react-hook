import React from 'react'
import { useOnlineStatus } from '../hook/useOnlineStatus'

export default function SaveButton() {
  const isOnline = useOnlineStatus();
  function handleSaveClick() {
    console.log('✅ Progress saved');
  }
  
  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
        {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  )
}
