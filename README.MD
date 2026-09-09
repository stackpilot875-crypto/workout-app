# IRONYX - Add "Save Workout" & Custom Reset Feature

## Overview

This guide explains how to add a **Save Workout** button that lets users save their current workout as a custom version, and modify the reset functionality to reset to the saved custom workout instead of the original default.

---

## Current System (How It Works Now)

### Storage Keys Currently Used
```javascript
// Currently in script.js
const STORAGE_KEY = "personalWorkoutPlan";
```

This stores:
- The current workout (whether modified from default or newly created)
- All user changes persist across sessions

### Reset Function Currently
```javascript
function resetToDefault() {
    // Takes DEFAULT_WORKOUT and overwrites current workout
    appState.workout = structuredClone(DEFAULT_WORKOUT);
    saveWorkout();
    render();
}
```

**Problem:** Resets to DEFAULT_WORKOUT, losing all user customizations.

---

## What You Need to Add

### Step 1: Create New Storage Keys in `script.js`

**Location:** Find the CONSTANTS section (around line 10)

**Current Code:**
```javascript
const STORAGE_KEY = "personalWorkoutPlan";
```

**Change To:**
```javascript
const STORAGE_KEY = "personalWorkoutPlan";           // Current workout
const SAVED_CUSTOM_WORKOUT_KEY = "customSavedWorkout"; // User's saved version
```

**Why:** You need a separate key to store the user's "saved" custom workout.

---

### Step 2: Create New Storage Functions in `script.js`

**Location:** Find the STORAGE FUNCTIONS section (around line 180)

**Add These New Functions:**

```javascript
/**
 * Save current workout as custom saved version
 * This is what users click "Save" for
 */
function saveCustomWorkout() {
    try {
        // Create deep copy of current workout
        const customCopy = structuredClone(appState.workout);
        
        // Store it with the custom key
        localStorage.setItem(SAVED_CUSTOM_WORKOUT_KEY, JSON.stringify(customCopy));
        
        // Show user feedback
        showCustomWorkoutSavedMessage();
    } catch (error) {
        console.error("Error saving custom workout:", error);
        alert("Failed to save custom workout");
    }
}

/**
 * Check if user has a saved custom workout
 * Returns true if custom workout exists, false otherwise
 */
function hasCustomSavedWorkout() {
    const saved = localStorage.getItem(SAVED_CUSTOM_WORKOUT_KEY);
    return saved !== null; // true if exists, false if not
}

/**
 * Load custom saved workout if it exists
 */
function loadCustomSavedWorkout() {
    try {
        const saved = localStorage.getItem(SAVED_CUSTOM_WORKOUT_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
        return null;
    } catch (error) {
        console.error("Error loading custom workout:", error);
        return null;
    }
}

/**
 * Show feedback message when workout is saved
 */
function showCustomWorkoutSavedMessage() {
    // Simple alert for now (you can improve this later)
    alert("✓ Workout saved! Reset will now go to this version.");
}
```

**What These Do:**
- `saveCustomWorkout()` - Saves current workout to new storage key
- `hasCustomSavedWorkout()` - Checks if user has saved a custom workout
- `loadCustomSavedWorkout()` - Gets the saved custom workout
- `showCustomWorkoutSavedMessage()` - User feedback

---

### Step 3: Modify the Reset Function

**Location:** Find `resetToDefault()` function (around line 210)

**Current Code:**
```javascript
function resetToDefault() {
    showConfirmModal(
        "Reset to Sample Workout?",
        "This will replace all changes with the original sample workout. All progress will be lost.",
        () => {
            appState.workout = structuredClone(DEFAULT_WORKOUT);
            appState.currentDayIndex = 0;
            saveWorkout();
            render();
            closeAllModals();
        }
    );
}
```

**Change To:**
```javascript
function resetToDefault() {
    // Check if user has a custom saved workout
    const customWorkout = loadCustomSavedWorkout();
    
    if (customWorkout) {
        // User has saved a custom version
        showConfirmModal(
            "Reset to Saved Workout?",
            "This will reset to your last saved custom workout. Current changes will be lost.",
            () => {
                appState.workout = structuredClone(customWorkout);
                appState.currentDayIndex = 0;
                saveWorkout();
                render();
                closeAllModals();
            }
        );
    } else {
        // No custom saved, use default
        showConfirmModal(
            "Reset to Sample Workout?",
            "You haven't saved a custom workout yet. This will reset to the default sample workout.",
            () => {
                appState.workout = structuredClone(DEFAULT_WORKOUT);
                appState.currentDayIndex = 0;
                saveWorkout();
                render();
                closeAllModals();
            }
        );
    }
}
```

**What Changed:**
- Now checks if custom saved workout exists
- If yes: reset goes to custom saved version
- If no: reset goes to default workout
- Updated confirmation messages to reflect this

---

### Step 4: Add Save Button to HTML

**Location:** Find the header section in `index.html` (around line 17)

**Current Code:**
```html
<div class="header-content">
    <h1 class="app-title">IRONY-X</h1>
    <button class="btn-reset" id="resetBtn" aria-label="Reset to sample workout">
        ↺ Reset
    </button>
</div>
```

**Change To:**
```html
<div class="header-content">
    <h1 class="app-title">IRONY-X</h1>
    <div class="header-buttons">
        <button class="btn-save" id="saveBtn" aria-label="Save current workout">
            💾 Save Workout
        </button>
        <button class="btn-reset" id="resetBtn" aria-label="Reset to saved workout">
            ↺ Reset
        </button>
    </div>
</div>
```

**What Changed:**
- Added new `<div class="header-buttons">` container
- Added new save button with id `saveBtn`
- Changed reset button label to "Reset to saved workout"
- Grouped both buttons together

---

### Step 5: Style the New Save Button & Container

**Location:** Find BUTTONS section in `style.css` (around line 65)

**Add This New CSS:**

```css
/* Button container - keeps buttons together */
.header-buttons {
    display: flex;
    gap: var(--space-md);
    align-items: center;
}

/* Save button styling */
.btn-save {
    background: #10b981;        /* Green color */
    color: #fff;
    font-weight: 700;
    padding: var(--space-sm) var(--space-lg);
    border: var(--border-thick);
    font-size: var(--font-size-sm);
    box-shadow: var(--shadow-sm);
    text-transform: uppercase;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.btn-save:hover {
    background: #059669;        /* Darker green on hover */
    transform: translate(2px, 2px);
    box-shadow: 0 0 0 0 #000;
}

.btn-save:active {
    box-shadow: 0 0 0 0 #000;
    transform: translate(4px, 4px);
}

/* Responsive - stack buttons on mobile */
@media (max-width: 768px) {
    .header-buttons {
        gap: var(--space-sm);
        flex-direction: column;
        width: 100%;
    }
    
    .btn-save,
    .btn-reset {
        width: 100%;
    }
}
```

**What This Does:**
- `.header-buttons` - Flexbox container for both buttons
- `.btn-save` - Green button styling (matches neo-brutalist style)
- Hover state with shadow shift
- Responsive design for mobile

---

### Step 6: Add Event Listener for Save Button

**Location:** Find `setupEventListeners()` function (around line 800)

**Current Code:**
```javascript
function setupEventListeners() {
    // Reset button
    document.getElementById("resetBtn").addEventListener("click", resetToDefault);
    
    // Edit day name
    document.getElementById("editDayNameBtn").addEventListener("click", openEditDayNameModal);
    // ... more listeners ...
}
```

**Change To:**
```javascript
function setupEventListeners() {
    // Save button
    document.getElementById("saveBtn").addEventListener("click", () => {
        saveCustomWorkout();
    });
    
    // Reset button
    document.getElementById("resetBtn").addEventListener("click", resetToDefault);
    
    // Edit day name
    document.getElementById("editDayNameBtn").addEventListener("click", openEditDayNameModal);
    // ... rest of listeners ...
}
```

**What Changed:**
- Added event listener for save button
- Calls `saveCustomWorkout()` when clicked

---

## How It Works (Data Flow)

### First Time User
```
User creates/modifies exercises
    ↓
Clicks "💾 Save Workout" button
    ↓
saveCustomWorkout() runs
    ↓
Stores to SAVED_CUSTOM_WORKOUT_KEY
    ↓
Message: "✓ Workout saved!"
    ↓
Now has custom saved version
```

### User Clicks Reset
```
User clicks "↺ Reset" button
    ↓
resetToDefault() checks if custom saved exists
    ↓
YES → Reset to saved custom workout
NO  → Reset to default sample workout
```

### Load on Next Visit
```
User closes and reopens app
    ↓
loadWorkout() loads from STORAGE_KEY
    ↓
Gets current workout (saved earlier)
    ↓
App displays their customized version
    ↓
Reset button still points to custom saved
```

---

## Step-by-Step Implementation Checklist

### Part 1: JavaScript Changes (script.js)
- [ ] Add new storage keys at top (line ~10)
- [ ] Add 4 new functions in STORAGE section (line ~180)
- [ ] Modify resetToDefault() function (line ~210)
- [ ] Add event listener in setupEventListeners() (line ~800)

### Part 2: HTML Changes (index.html)
- [ ] Add `<div class="header-buttons">` wrapper (line ~17)
- [ ] Move reset button inside wrapper
- [ ] Add new save button inside wrapper

### Part 3: CSS Changes (style.css)
- [ ] Add .header-buttons styling (line ~65)
- [ ] Add .btn-save styling (line ~65)
- [ ] Add responsive media query for buttons

---

## Testing Your Changes

### Test 1: Save & Reset with Custom
1. Open app
2. Edit an exercise (change name or sets)
3. Click "💾 Save Workout" button
4. See "✓ Workout saved!" message
5. Refresh page
6. Exercises still edited ✓
7. Click "↺ Reset" button
8. Should reset to your saved version ✓

### Test 2: Reset Without Saving
1. Open fresh (clear localStorage first if testing)
2. Edit exercises BUT DON'T click Save
3. Make notes of changes
4. Click "↺ Reset"
5. Should show "no custom saved" message
6. Should reset to default ✓

### Test 3: Save Multiple Times
1. Create version A
2. Click "Save Workout"
3. Make more changes (version B)
4. Click "Save Workout" again
5. Reset should go to version B ✓

### Test 4: Browser Refresh
1. Save a custom workout
2. Refresh page (F5)
3. Custom still there ✓
4. Reset button still points to custom ✓

---

## Optional Enhancements (After Basic Implementation)

### Add Visual Indicator
Show user that a custom workout is saved:

```javascript
// Add to renderDashboard() function
function renderDashboard() {
    // ... existing code ...
    
    // NEW: Show if custom saved
    const hasCustom = hasCustomSavedWorkout();
    const saveBtn = document.getElementById("saveBtn");
    
    if (hasCustom) {
        saveBtn.textContent = "💾 Saved"; // Change button text
        saveBtn.style.background = "#059669"; // Darker green
    } else {
        saveBtn.textContent = "💾 Save Workout"; // Normal text
        saveBtn.style.background = "#10b981"; // Normal green
    }
}
```

### Better User Feedback
Replace alert with better message:

```javascript
function showCustomWorkoutSavedMessage() {
    // Instead of alert
    console.log("✓ Custom workout saved successfully!");
    
    // Or create a toast notification
    // (Create a temporary message at top of page)
}
```

### Add "Clear Saved" Button
Let users clear their custom saved version:

```javascript
function clearSavedWorkout() {
    showConfirmModal(
        "Clear Saved Workout?",
        "Remove your custom saved workout. Reset will go to default.",
        () => {
            localStorage.removeItem(SAVED_CUSTOM_WORKOUT_KEY);
            alert("Saved workout cleared");
            render();
        }
    );
}
```

---

## Common Issues & Solutions

### Issue 1: Save button doesn't work
**Check:**
- Is saveBtn event listener added? (Step 6)
- Is saveCustomWorkout() function defined? (Step 2)
- Open browser console (F12) for errors

### Issue 2: Reset not working
**Check:**
- Did you modify resetToDefault()? (Step 3)
- Does it call loadCustomSavedWorkout()? 
- Is SAVED_CUSTOM_WORKOUT_KEY defined? (Step 1)

### Issue 3: Button styling looks wrong
**Check:**
- Is .header-buttons CSS added? (Step 5)
- Is .btn-save CSS added?
- Check browser DevTools (F12) for style conflicts

### Issue 4: Save doesn't persist
**Check:**
- localStorage is working (check browser console)
- saveCustomWorkout() calls localStorage.setItem()
- SAVED_CUSTOM_WORKOUT_KEY is correct

---

## Summary of Changes

| File | Change | Why |
|------|--------|-----|
| `script.js` | Add storage keys | Need separate storage for custom |
| `script.js` | Add 4 functions | Handle save/load custom workout |
| `script.js` | Modify resetToDefault | Check for custom before reset |
| `script.js` | Add event listener | Connect save button to function |
| `index.html` | Add save button | UI for saving |
| `index.html` | Wrap buttons | Keep buttons together |
| `style.css` | Add button styles | Make save button look good |
| `style.css` | Add container style | Layout buttons properly |

---

## What You're NOT Changing

- ❌ Do NOT change DEFAULT_WORKOUT
- ❌ Do NOT change existing STORAGE_KEY
- ❌ Do NOT modify loadWorkout() or saveWorkout()
- ❌ Do NOT change existing render() functions
- ❌ Do NOT modify exercise operations (add/edit/delete)

These stay the same because they already work perfectly.

---

## Files to Modify

1. **script.js**
   - Lines 10-11: Add constants
   - Lines 180-240: Add functions & modify reset
   - Lines 800-820: Add event listener

2. **index.html**
   - Lines 15-25: Add save button & wrapper

3. **style.css**
   - Lines 65-120: Add button styles

---

## Implementation Order (Do This)

1. **First:** Add storage keys (script.js)
2. **Second:** Add new functions (script.js)
3. **Third:** Modify resetToDefault (script.js)
4. **Fourth:** Add event listener (script.js)
5. **Fifth:** Add save button (index.html)
6. **Sixth:** Add button wrapper (index.html)
7. **Seventh:** Add CSS styling (style.css)
8. **Test:** Refresh and try all 4 test scenarios

---

**Good luck implementing! You got this! 💪**

If you get stuck, check:
1. Browser console for errors (F12)
2. Verify all function names match exactly
3. Check localStorage in DevTools (Application tab)
4. Make sure storage keys are spelled correctly