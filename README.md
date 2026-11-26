# Sorry, I Heard That Wrong

[![make.fun](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729.svg)](https://make.fun/c/u-kiencx-sorry-i-heard-that-wrong-1858c729)
[![rank](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729/Ritwan007/u-kiencx-sorry-i-heard-that-wrong-1858c729/rank.svg)](https://make.fun/c/u-kiencx-sorry-i-heard-that-wrong-1858c729)
[![reward](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729/Ritwan007/u-kiencx-sorry-i-heard-that-wrong-1858c729/reward.svg)](https://make.fun/c/u-kiencx-sorry-i-heard-that-wrong-1858c729)

Entry for the [make.fun competition "Sorry, I Heard That Wrong"](https://make.fun/c/u-kiencx-sorry-i-heard-that-wrong-1858c729): the funniest one-line apology a smart speaker gives after mishearing its owner, at most 140 characters.

`main.ts` writes the line to `/output/entry.txt`:

> Apologies. You said 'turn off the lights' and I heard 'turn on the fight.' The neighbours have been notified.

Run with Node 22+: `node main.ts`

The line is 109 characters — well inside the 140-character gate — and was picked
from 12 fresh candidates (see `CANDIDATES-sorry-i-heard-that-wrong.md` in the watch
workspace) in a head-to-head gauntlet against the judge's brief: it opens in the
device's own flat apologetic voice, quotes the real command and the mishearing side
by side (lights/fight — a plausible speech-recognition slip), then undercuts with a
consequence funnier than the mishearing itself: the speaker started a fight and has
already notified the neighbours. No name, no song title, no meme, no setup.
`main.ts` self-checks the 1–140 character gate and fails loudly rather than
writing an entry that would fail it.
