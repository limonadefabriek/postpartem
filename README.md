# MILF in shape

A gentle, seven-and-a-half-minute daily routine for getting strong again after birth. One offline web page: no accounts, no tracking, no equipment beyond a couch, a chair and a resistance band.

Built for one specific person, 7-8 weeks after a vaginal birth, cleared by her pelvic floor specialist (bekkenbodemspecialist) to start exercising lightly again.

## How it works

- Three days rotate: **A: Core & glutes**, **B: Hips & legs**, **C: Strength & balance**.
- Seven exercises a day, in the same seven slots: Flow, Push, Legs, Core, Posterior, Side core, Stretch.
- A 15-second get-into-position interval before each exercise, then 45 or 60 seconds of work. Total about 7m30.
- Five levels. Level 1 is the gentle starting point and applies to every exercise. Use the *easier* and *harder* buttons any time.
- Every card has a breath cue and a fixed **Stop if** line: doming or coning along the midline, heaviness or pressure down below, leaking, or pain.
- Pelvic floor work runs through the whole routine: dedicated lifts-and-release moves (Day A and C Core), release stretches (Day B and C Stretch), and a gentle lift cued on the effort of squats, bridges, lunges and core moves.
- Every two weeks a three-marker re-test (incline push-ups, side plank from the knees, sit-to-stands) suggests moving a level up or down.
- Sound is on by default, with a mute toggle and optional vibration on the home screen. It follows the phone's light or dark theme.

This is general fitness guidance, not medical advice. Her pelvic floor specialist has the final say on what she does.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole app: exercises, figures, timer, styling |
| `manifest.webmanifest` | Makes it installable to the home screen |
| `sw.js` | Service worker for offline use |
| `icon.svg`, `icon.png` | App icons |

## Publish on GitHub Pages

1. Create a new repository, upload these files to the root, and commit.
2. Go to **Settings, Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
3. After a minute the app is live at `https://<username>.github.io/<repo-name>/`.
4. On her phone open that address, then **Add to Home Screen** (Safari: Share, Add to Home Screen; Chrome: menu, Install app).

## Sharing an origin with another app

Two apps under the same `username.github.io` share browser storage and caches, so this app keeps its own:

- `localStorage` key: `milfinshape.v1` (in `index.html`, `const KEY`)
- Cache name: `milfinshape-v1` (in `sw.js`), and cleanup only deletes caches starting with `milfinshape-`

If you copy this project again, change both.

## Shipping a change

Edit the files, bump the cache version in `sw.js` (`milfinshape-v2`, and so on), and push. Her phone picks up the new version the next time she opens the app online.

## Changing the look

The colours are tokens at the top of the `<style>` block in `index.html`. The background is blush `--bg` (`#ffe1ec`) and the accent is fuchsia `--accent` (`#ff4f9a`), with `--accent-text` (`#c2185b`) for text on the background. Other accent options: `#ff6fae` (raspberry candy, softer) or `#ff2f8a` (electric, louder).
