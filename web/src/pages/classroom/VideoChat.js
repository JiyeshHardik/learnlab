import React, { useState } from 'react'
import useLocalAudioToggle from 'hooks/useLocalAudioToggle'
import useScreenShareToggle from 'hooks/useScreenShareToggle'
import { Badge } from 'antd'
import { Card, CardBody, CardHeader } from 'reactstrap'

import { Animated } from 'react-animated-css'
import { Maximize, Mic, MicOff, Monitor, X, Users } from 'react-feather'
import Fab from '@bit/mui-org.material-ui.fab'
import MainParticipant from './MainParticipant'
import RemoteParticipant from './RemoteParticipant'

const styles = {
  videoWrapper: {
    overflow: 'hidden',
    flexGrow: 2,
  },
  videoContainer: {
    height: '100%',
    width: '100%',
    padding: '0px',
    position: 'relative',
    backgroundColor: '#141322',
    borderRadius: '16px',
  },
  actionContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  otherParticipantsContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    height: '85%',
    position: 'absolute',
    top: 0,
    start: 0,
  },
  otherParticipants: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
}

const VideoChat = ({
  room,
  participants,
  dominantSpeaker,
  screenShareParticipant,
  onLeaveRoomHandler,
}) => {
  const [isLocalAudioEnabled, toggleIsLocalAudioEnabled] = useLocalAudioToggle(
    room.localParticipant,
  )
  const [isSharing, toggleScreenShare] = useScreenShareToggle(room)
  const [isAllParticipantsVisible, setIsAllParticipantsVisible] = useState(true)

  const mainParticipant = screenShareParticipant || dominantSpeaker || room.localParticipant

  console.log('isSharing', isSharing)
  console.log('screenShareParticipant', screenShareParticipant?.identity)
  console.log('dominant', dominantSpeaker?.identity)
  console.log('main', mainParticipant?.identity)

  const allParticipantsLength = participants.length + 1
  const remoteParticipants = participants.map(participant => (
    <RemoteParticipant
      key={participant.identity}
      participant={participant}
      isLocalParticipant={false}
    />
  ))

  return (
    <>
      <Card style={styles.videoWrapper}>
        <CardHeader className="card-header-borderless">
          <h5 className="mb-0 mr-2">
            <i className="fe fe-book-open mr-2 font-size-18 text-muted" />
            Intro to Algebra <small className="text-muted">30 Students</small>
          </h5>
        </CardHeader>
        <CardBody>
          <div style={styles.videoContainer}>
            <MainParticipant
              key="main-participant"
              numParticipants={allParticipantsLength}
              participant={mainParticipant}
              isSharing={isSharing}
              toggleScreenShare={toggleScreenShare}
            />
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={isAllParticipantsVisible}
            >
              <div className="m-2" style={styles.otherParticipantsContainer}>
                <div className="hideScrollBar" style={styles.otherParticipants}>
                  <RemoteParticipant
                    key={room.localParticipant.identity}
                    participant={room.localParticipant}
                    isLocalParticipant={true}
                    isLocalAudioEnabled={isLocalAudioEnabled}
                  />
                  {remoteParticipants}
                </div>
              </div>
            </Animated>
            <div style={styles.actionContainer}>
              <div>
                <Badge className="m-3" count={allParticipantsLength}>
                  <Fab
                    onClick={() => setIsAllParticipantsVisible(!isAllParticipantsVisible)}
                    className="bg-secondary text-white mt-n1"
                    color="inherit"
                    size="medium"
                  >
                    <Users />
                  </Fab>
                </Badge>
              </div>
              <div>
                <Fab
                  onClick={toggleIsLocalAudioEnabled}
                  className="bg-primary text-white m-2"
                  color="inherit"
                  size="medium"
                >
                  {isLocalAudioEnabled ? <Mic /> : <MicOff />}
                </Fab>
                <Fab
                  onClick={toggleScreenShare}
                  disabled={isSharing}
                  className="bg-primary text-white m-2"
                  color="inherit"
                  size="medium"
                >
                  <Monitor />
                </Fab>
                <Fab
                  onClick={onLeaveRoomHandler}
                  className="bg-white text-danger m-2"
                  color="inherit"
                  size="medium"
                >
                  <X />
                </Fab>
              </div>
              <div className="m-3">
                <Fab className="bg-secondary text-white mt-n1" color="inherit" size="medium">
                  <Maximize />
                </Fab>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default VideoChat
