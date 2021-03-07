import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const Word = ({word}: {word: string}) => {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFilled(true);
    }, 65);
  }, [])
  
  return (
    <WordSC filled={filled}>
      {word}
    </WordSC>
  )
}

interface ISuccessiveTypeProps {
  words: string;
  speed: number;
  onEnd?: () => void
}

const SuccessiveType = ({words, speed, onEnd}: ISuccessiveTypeProps) => {
  const [index, setIndex] = useState(0);

  const splitWords: string[] = useMemo(() => words.split(" "), [words]);
  const shownWords: string[] = useMemo(() => splitWords.slice(0, index+1), [splitWords, index]);

  useEffect(() => {
    if(index === splitWords.length-1) {
      if(onEnd) setTimeout(() => {
        onEnd();
      }, 1500);

      return;
    }

    const currentWord = splitWords[index];

    setTimeout(() => {
      setIndex(index + 1);
    }, currentWord.length * (Math.E * 12.5) + (currentWord[currentWord.length-1] === '.' ? 500 : 0));
  }, [index, splitWords]);


  return (
    <Container>
      {shownWords.map((word: string, idx) => (
        <Word key={idx} word={word}/>
      ))}
    </Container>
  )
}

const Container = styled.div`
  text-align: left;
  color: #fff;
  font-size: 20pt;
`;

const WordSC = styled.span<{filled: boolean}>`
  color: ${({filled}) => filled ? "#ccc" : "#fff"};
  margin-right: 4pt;
  transition: color 0.1s ease;
  display: inline-block;
`;

export default SuccessiveType;