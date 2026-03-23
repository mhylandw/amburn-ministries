# Capacitor Mobile App — Handoff Notes

**Date:** 2026-03-23
**Project:** Amburn Ministries — iOS + Android via Capacitor

---

## What Was Done

### 1. Capacitor Installed and Initialized
- Installed `@capacitor/core`, `@capacitor/cli`, `@capacitor/ios`, `@capacitor/android` via npm.
- Initialized Capacitor with:
  - App ID: `com.amburnministries.app`
  - App Name: `Amburn Ministries`
  - Web dir: `dist`
- Config written to `capacitor.config.json` at project root.

### 2. Vite Config Updated
- `vite.config.js` — added `base: './'` so all asset paths are relative, which is required for Capacitor's file-based loading.

### 3. Bottom Tab Bar Added (Mobile Only)
- New component: `src/components/BottomTabBar.jsx`
- Shows only on mobile screens (hidden at `md` breakpoint and above via `md:hidden`).
- 5 tabs: Home, Books, Blog, Resources, Donate — each with a Lucide icon and label.
- Fixed at the bottom of the screen, styled in `coal-900` with `flame-400` active highlight, matching the existing Navbar aesthetic.
- Safe-area-inset padding applied for iPhone notch/home indicator support.
- Imported and rendered in `App.jsx`.
- Main content area (`<main>`) has `pb-16` on mobile / `md:pb-0` on desktop so content is not hidden behind the tab bar.

### 4. RadioMiniPlayer Updated
- Both states (expanded and collapsed) updated from `bottom-0` to `bottom-16 md:bottom-0`.
- On mobile, the player now floats above the tab bar rather than behind it.
- On desktop, behavior is unchanged.

### 5. Project Built
- `npm run build` completed successfully — output in `dist/`.
- All 1818 modules transformed with no errors.

### 6. iOS and Android Platforms Added and Synced
- `npx cap add ios` — created `ios/` Xcode project.
- `npx cap add android` — created `android/` Gradle project.
- `npx cap sync` — web assets copied to both native projects.

---

## What You Need to Do Next

### iOS (Required Before Running on Device or Simulator)

1. **Open the Xcode project:**
   ```
   npx cap open ios
   ```
   Or open manually: `ios/App/App.xcworkspace`

2. **Set your Apple Developer Team:**
   - In Xcode, select the `App` target
   - Go to the **Signing & Capabilities** tab
   - Under **Signing**, choose your Apple Developer Team
   - Make sure "Automatically manage signing" is checked

3. **Set the Bundle Identifier:**
   - Confirm it reads `com.amburnministries.app`
   - Change if needed to match your App Store connect app

4. **Select a simulator or connected device** and press Run (Cmd+R)

5. **For App Store submission:**
   - Add app icons to `ios/App/App/Assets.xcassets/AppIcon.appiconset/`
   - Add a launch screen image if desired
   - Set version and build number in the target's General settings
   - Archive via Product > Archive

### Android (Required Before Running)

1. **Install Android Studio** if not already installed: https://developer.android.com/studio

2. **Open the Android project:**
   ```
   npx cap open android
   ```
   Or open `android/` folder in Android Studio.

3. **Set your Application ID:**
   - In `android/app/build.gradle`, confirm `applicationId "com.amburnministries.app"`

4. **Add app icons:**
   - Replace launcher icons in `android/app/src/main/res/mipmap-*/`

5. **Run on emulator or device** via Android Studio's Run button

6. **For Play Store submission:**
   - Generate a signed APK or AAB via Build > Generate Signed Bundle/APK

---

## Future Workflow (After Making Code Changes)

Each time you change the React source:

```bash
cd "/Users/michaelamstutz/Amburn Ministries"
npm run build
npx cap sync
```

Then reopen in Xcode/Android Studio and re-run.

---

## Issues Encountered

None. All steps completed cleanly:
- npm installs: no vulnerabilities
- Capacitor init: success
- Build: 651ms, no errors
- `cap add ios`: success
- `cap add android`: success
- `cap sync`: completed in ~0.2s

---

## Files Changed or Created

| File | Change |
|------|--------|
| `vite.config.js` | Added `base: './'` |
| `src/App.jsx` | Imported + rendered `BottomTabBar`, added `pb-16 md:pb-0` to `<main>` |
| `src/components/BottomTabBar.jsx` | New file — mobile-only bottom tab bar |
| `src/components/RadioMiniPlayer.jsx` | `bottom-0` changed to `bottom-16 md:bottom-0` in both states |
| `capacitor.config.json` | New file — Capacitor configuration |
| `ios/` | New directory — Xcode native project |
| `android/` | New directory — Android Gradle project |
| `dist/` | Rebuilt with `base: './'` |
