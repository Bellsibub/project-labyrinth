import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setState } from 'store/game';
import { TypoText } from 'components/reusables/Typography';
import Section from 'components/reusables/Section';
import Button from 'components/reusables/Button';
import ActionCompass from 'components/ActionCompass';
import FolderTabs from 'components/FolderTabs';

export default () => {
  const dispatch = useDispatch();
  const room = useSelector((store) => store.room.saved.currentRoom);

  return (
    <Section>
      <TypoText>{room.description}</TypoText>
      <TypoText>What would you like to do?</TypoText>
      {room.actions.length > 0 ? (
        <ActionCompass />
      ) : (
        <Button type="button" onClick={() => dispatch(setState('End'))}>
          Continue on...
        </Button>
      )}
      <FolderTabs />
    </Section>
  );
};
