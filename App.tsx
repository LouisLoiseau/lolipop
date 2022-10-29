import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import spl from 'react-native-spl/src/index';

console.log(spl);

export default function App() {
  const [result, setResult] = useState<number | null>(null);
  useEffect(() => {
    spl
      .getNumber(21, 21)
      .then(res => setResult(res))
      .catch(_err => console.warn('unknown error occurred'));
  }, []);
  return (
    <SafeAreaView>
      {result === null ? (
        <Text>{'Waiting for result'}</Text>
      ) : (
        <Text>{result}</Text>
      )}
    </SafeAreaView>
  );
}
