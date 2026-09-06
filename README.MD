#  Workout Tracker

A complete, fully functional personal workout tracker built with vanilla HTML, CSS, and JavaScript. Track your workouts, manage exercises, and monitor progress—all in a modern, mobile-friendly interface.

## ✨ Features

- **Complete Workout Management**: View, edit, add, and delete exercises
- **Seven-Day Split**: Fully editable workout plan with seven days
- **Exercise Customization**: Edit all exercise properties (sets, reps, rest, muscle groups, notes)
- **Progress Tracking**: Visual progress bars and completion statistics
- **Daily & Weekly Stats**: Dashboard with real-time progress calculations
- **Persistent Data**: All changes automatically saved to browser localStorage
- **Mobile-First Design**: Optimized for phone use at the gym
- **Dark Modern UI**: Premium, athletic aesthetic with smooth animations
- **No Dependencies**: Pure vanilla JavaScript—no frameworks required
- **Accessibility**: Keyboard navigation, focus management, ARIA labels

## 🚀 Getting Started

### Requirements
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools needed

### Installation

1. **Extract the project files**:
   ```
   workout-app/
   ├── index.html
   ├── style.css
   ├── script.js
   └── README.md
   ```

2. **Open in browser**:
   - Simply double-click `index.html` to open it in your default browser, OR
   - Use a local server (recommended for better performance):
     ```bash
     # If you have Python 3 installed:
     python -m http.server 8000
     
     # Then open: http://localhost:8000
     ```

3. **First Visit**:
   - The app automatically loads the sample 7-day workout split
   - All data is saved to your browser's localStorage
   - Start tracking immediately!

## 📖 How to Use

### Navigation
- Use the **day tabs** at the top to switch between workout days
- **Monday through Sunday** tabs represent your complete weekly split

### Dashboard
The dashboard shows:
- **Today's Workout**: Current day's name
- **Exercises**: Total exercises for the day
- **Completed Today**: How many exercises you've finished
- **Daily Progress**: Percentage complete for the day
- **Weekly Progress**: Bar chart showing overall weekly progress

### Exercise Cards
Each exercise displays:
- Exercise name and basic info
- Sets and reps (with +/− controls)
- Rest time and muscle group
- Optional notes

### Mark as Completed
Check the **checkbox** on any exercise card to mark it complete. The card will change appearance and update all progress stats instantly.

### Edit Exercise Sets
Use the **−** and **+** buttons in the sets section to quickly adjust sets without opening the full edit form.

### Edit Exercise Details
Click **✎ Edit** on any exercise to modify:
- Exercise name
- Sets
- Reps (supports ranges like "6–10")
- Rest time
- Muscle group
- Notes

### Add Exercise
Click **+ Add Exercise** to add a new exercise to the current day:
1. Fill in the exercise details
2. Click **Save Exercise**
3. The exercise appears immediately in the list

### Delete Exercise
Click **× Delete** on any exercise to remove it. A confirmation dialog prevents accidental deletion.

### Reorder Exercises
Use the **↑ Up** and **↓ Down** buttons to reorder exercises within a day.

### Edit Day Name
Click **✎ Edit Day Name** to rename the current workout day.

### Add Exercises to Rest Days
Rest days (Day 7 by default) have no exercises. Click **+ Add Exercise** to add exercises to rest days if desired.

### Reset Workout
Click **↺ Reset** in the top-right corner to restore the original sample workout. A confirmation dialog prevents accidental reset.

## 💾 Data Persistence

- **Automatic Saving**: All changes are instantly saved to browser localStorage
- **Persistent Between Sessions**: Close and reopen the app—all your data remains
- **Local Only**: Data is stored on your device, not on any server
- **No Account Needed**: Your data is private and only accessible from this browser

### Storage Details
- Storage key: `personalWorkoutPlan`
- All data is stored as JSON
- If localStorage is unavailable, changes are still visible (but won't persist)

## 📱 Mobile Usage

- **Optimized for Phones**: Buttons and touch targets are large and easy to tap
- **Responsive Layout**: Works great on phones, tablets, and desktop screens
- **No Horizontal Scrolling**: Content fits naturally on mobile
- **Smooth Scrolling**: Day tabs scroll smoothly if needed
- **Fast Loading**: No heavy libraries—loads instantly

## ⌨️ Keyboard Shortcuts

- **Escape**: Close any open modal dialog
- **Tab**: Navigate through form fields
- **Enter**: Submit forms

## 🎨 Customization

### Colors
Edit the CSS variables at the top of `style.css`:
```css
:root {
    --color-bg-primary: #0f1419;
    --color-accent: #00d9ff;
    /* ... more variables ... */
}
```

### Workout Data
To modify the default workout:
1. Open `script.js`
2. Find the `DEFAULT_WORKOUT` object
3. Edit exercises, sets, reps, etc.
4. The changes apply when you reset to the sample workout

### Typography & Spacing
All typography and spacing use CSS variables for easy customization without editing multiple rules.

## 🧪 Testing Workflow

Use this checklist to test all functionality:

1. ✅ **Open Website**: Load `index.html`
2. ✅ **View Dashboard**: Confirm stats display correctly
3. ✅ **Select Day**: Click day tabs and view exercises
4. ✅ **Mark Complete**: Check exercise checkboxes
5. ✅ **Change Sets**: Use +/− to adjust sets
6. ✅ **Edit Exercise**: Click Edit and modify details
7. ✅ **Add Exercise**: Click Add and create new exercise
8. ✅ **Delete Exercise**: Click Delete with confirmation
9. ✅ **Reorder**: Use Up/Down buttons
10. ✅ **Edit Day Name**: Change workout day name
11. ✅ **Refresh Page**: Confirm all changes persist
12. ✅ **Reset Workout**: Restore original sample data
13. ✅ **Confirm Reset**: Verify sample workout is loaded

## 🔧 Code Structure

### `index.html`
- Semantic HTML structure
- Modal dialogs for editing
- Exercise list container
- Form inputs and buttons
- Accessibility attributes

### `style.css`
- Dark modern theme with CSS variables
- Mobile-first responsive design
- Smooth animations and transitions
- Custom checkbox styling
- Responsive grid layouts

### `script.js`
Organized into clear sections:
- **Configuration**: Default workout data
- **State Management**: App state tracking
- **Storage**: localStorage functions
- **Utilities**: Helper functions
- **Rendering**: DOM manipulation
- **Operations**: Exercise/day management
- **Event Handlers**: User interactions
- **Initialization**: App startup

### Key Functions
- `loadWorkout()`: Load from storage or initialize
- `saveWorkout()`: Persist to localStorage
- `render()`: Update entire UI
- `toggleExerciseCompletion()`: Mark exercise done
- `changeSets()`: Adjust sets
- `deleteExercise()`: Remove exercise
- `addExercise()`: Add new exercise

## 🐛 Troubleshooting

### Data Not Saving?
- Check browser localStorage is enabled
- Open DevTools → Application → Local Storage
- Look for "personalWorkoutPlan" key

### Exercise Deleted by Mistake?
- Click Reset to restore the sample workout
- Start fresh and re-add exercises

### Exercises Not Showing?
- Ensure JavaScript is enabled
- Try clearing browser cache
- Reload the page

### Looking Pixelated on Mobile?
- Ensure viewport meta tag is in HTML (it is)
- Zoom should adjust automatically

## 📚 Learning Resources

This project teaches:
- **DOM Manipulation**: Creating and updating HTML elements
- **Event Handling**: Click, change, and form events
- **localStorage API**: Saving and loading data
- **State Management**: Tracking app state
- **Responsive Design**: CSS Grid and Flexbox
- **Accessibility**: ARIA labels and keyboard nav
- **Form Validation**: Input validation patterns
- **JSON**: Serializing data structures

## 🎯 Best Practices Used

- **Separation of Concerns**: Data logic separate from UI logic
- **DRY Principle**: Reusable functions and utilities
- **Clear Naming**: Descriptive variable and function names
- **Comments**: Helpful comments throughout code
- **Error Handling**: Graceful fallbacks for edge cases
- **Accessibility**: Keyboard navigation and ARIA labels
- **Performance**: Minimal re-renders, efficient DOM updates
- **Security**: HTML escaping to prevent injection

## 🚫 Limitations & Future Ideas

### Current Limitations
- Data only persists in browser (not synced across devices)
- No cloud backup
- No exercise database/suggestions
- No detailed analytics

### Future Enhancements
- Export/import workout as JSON
- One-rep-max calculator
- Volume tracking over time
- Exercise database with images
- Rest timer between sets
- Dark/light mode toggle
- Multiple workout templates

## 📝 License

Free to use and modify for personal use.

## 🤝 Support

For questions or issues:
1. Check the troubleshooting section
2. Review the code comments
3. Inspect browser console for errors
4. Verify localStorage is enabled

---

**Happy Training! 💪**

Start with the sample workout and customize it to match your routine. Track your progress daily and adjust as needed. The app is designed to stay with you through your entire training journey.