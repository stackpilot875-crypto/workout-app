// ============================================
// WORKOUT TRACKER - CORE APPLICATION
// ============================================

// ============================================
// 1. CONFIGURATION & CONSTANTS
// ============================================

const STORAGE_KEY = "personalWorkoutPlan";

// Default workout split - used on first visit
const DEFAULT_WORKOUT = {
    days: [
        {
            id: "day-1",
            name: "Upper Chest + Side Delts + Triceps",
            exercises: [
                {
                    id: "ex-1-1",
                    name: "Incline DB Press",
                    sets: 3,
                    reps: "6–10",
                    rest: "90 sec",
                    muscleGroup: "Chest",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-1-2",
                    name: "Incline Machine Press",
                    sets: 2,
                    reps: "8–12",
                    rest: "60 sec",
                    muscleGroup: "Chest",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-1-3",
                    name: "Chest Dips",
                    sets: 2,
                    reps: "8–12",
                    rest: "90 sec",
                    muscleGroup: "Chest",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-1-4",
                    name: "Cable Lateral Raise",
                    sets: 3,
                    reps: "10–15",
                    rest: "45 sec",
                    muscleGroup: "Shoulders",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-1-5",
                    name: "Incline EZ-Bar Skull Crusher",
                    sets: 3,
                    reps: "8–12",
                    rest: "60 sec",
                    muscleGroup: "Triceps",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-1-6",
                    name: "Triceps Pushdown",
                    sets: 2,
                    reps: "10–15",
                    rest: "45 sec",
                    muscleGroup: "Triceps",
                    notes: "",
                    completed: false
                }
            ]
        },
        {
            id: "day-2",
            name: "Back + Biceps",
            exercises: [
                {
                    id: "ex-2-1",
                    name: "Pull-Ups",
                    sets: 3,
                    reps: "5–8",
                    rest: "120 sec",
                    muscleGroup: "Back",
                    notes: "Weighted if needed",
                    completed: false
                },
                {
                    id: "ex-2-2",
                    name: "Wide-Grip Lat Pulldown",
                    sets: 3,
                    reps: "8–12",
                    rest: "90 sec",
                    muscleGroup: "Back",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-2-3",
                    name: "Single-Arm Kneeling Cable Lat Row",
                    sets: 3,
                    reps: "8–12",
                    rest: "75 sec",
                    muscleGroup: "Back",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-2-4",
                    name: "Wide-Grip Seated Cable Row",
                    sets: 2,
                    reps: "8–12",
                    rest: "90 sec",
                    muscleGroup: "Back",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-2-5",
                    name: "Straight-Arm Pulldown",
                    sets: 2,
                    reps: "10–15",
                    rest: "60 sec",
                    muscleGroup: "Back",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-2-6",
                    name: "Bayesian Cable Curl",
                    sets: 3,
                    reps: "8–12",
                    rest: "60 sec",
                    muscleGroup: "Biceps",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-2-7",
                    name: "Preacher Curl",
                    sets: 2,
                    reps: "10–15",
                    rest: "60 sec",
                    muscleGroup: "Biceps",
                    notes: "",
                    completed: false
                }
            ]
        },
        {
            id: "day-3",
            name: "Legs + Core",
            exercises: [
                {
                    id: "ex-3-1",
                    name: "Hack Squat",
                    sets: 3,
                    reps: "6–10",
                    rest: "120 sec",
                    muscleGroup: "Legs",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-3-2",
                    name: "Lying Leg Curl",
                    sets: 3,
                    reps: "8–12",
                    rest: "75 sec",
                    muscleGroup: "Legs",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-3-3",
                    name: "Leg Extension",
                    sets: 2,
                    reps: "10–15",
                    rest: "60 sec",
                    muscleGroup: "Legs",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-3-4",
                    name: "Standing Calf Raise on Hack Squat Machine",
                    sets: 3,
                    reps: "10–15",
                    rest: "60 sec",
                    muscleGroup: "Calves",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-3-5",
                    name: "Machine Crunch",
                    sets: 2,
                    reps: "8–15",
                    rest: "45 sec",
                    muscleGroup: "Core",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-3-6",
                    name: "Hanging Knee Raise",
                    sets: 2,
                    reps: "8–15",
                    rest: "60 sec",
                    muscleGroup: "Core",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-3-7",
                    name: "Ab Roller",
                    sets: 1,
                    reps: "6–12",
                    rest: "45 sec",
                    muscleGroup: "Core",
                    notes: "",
                    completed: false
                }
            ]
        },
        {
            id: "day-4",
            name: "Chest + Shoulders",
            exercises: [
                {
                    id: "ex-4-1",
                    name: "Flat Machine Chest Press",
                    sets: 3,
                    reps: "6–10",
                    rest: "90 sec",
                    muscleGroup: "Chest",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-4-2",
                    name: "Incline Machine Press",
                    sets: 2,
                    reps: "8–12",
                    rest: "75 sec",
                    muscleGroup: "Chest",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-4-3",
                    name: "Pec Deck",
                    sets: 2,
                    reps: "10–15",
                    rest: "60 sec",
                    muscleGroup: "Chest",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-4-4",
                    name: "Cable Lateral Raise",
                    sets: 3,
                    reps: "10–15",
                    rest: "45 sec",
                    muscleGroup: "Shoulders",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-4-5",
                    name: "DB/Machine Lateral Raise",
                    sets: 2,
                    reps: "10–15",
                    rest: "45 sec",
                    muscleGroup: "Shoulders",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-4-6",
                    name: "Reverse Pec Deck",
                    sets: 2,
                    reps: "10–15",
                    rest: "60 sec",
                    muscleGroup: "Shoulders",
                    notes: "",
                    completed: false
                }
            ]
        },
        {
            id: "day-5",
            name: "Back + Arms",
            exercises: [
                {
                    id: "ex-5-1",
                    name: "Pull-Ups",
                    sets: 3,
                    reps: "5–8",
                    rest: "120 sec",
                    muscleGroup: "Back",
                    notes: "Weighted if needed",
                    completed: false
                },
                {
                    id: "ex-5-2",
                    name: "Chest-Supported Row",
                    sets: 3,
                    reps: "6–10",
                    rest: "90 sec",
                    muscleGroup: "Back",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-5-3",
                    name: "Wide-Grip Seated Cable Row",
                    sets: 2,
                    reps: "8–12",
                    rest: "90 sec",
                    muscleGroup: "Back",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-5-4",
                    name: "Straight-Arm Pulldown",
                    sets: 2,
                    reps: "10–15",
                    rest: "60 sec",
                    muscleGroup: "Back",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-5-5",
                    name: "Bayesian Cable Curl",
                    sets: 2,
                    reps: "8–12",
                    rest: "60 sec",
                    muscleGroup: "Biceps",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-5-6",
                    name: "Preacher Curl",
                    sets: 2,
                    reps: "10–15",
                    rest: "60 sec",
                    muscleGroup: "Biceps",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-5-7",
                    name: "Overhead Cable Extension",
                    sets: 2,
                    reps: "8–12",
                    rest: "60 sec",
                    muscleGroup: "Triceps",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-5-8",
                    name: "Triceps Pushdown",
                    sets: 2,
                    reps: "10–15",
                    rest: "45 sec",
                    muscleGroup: "Triceps",
                    notes: "",
                    completed: false
                }
            ]
        },
        {
            id: "day-6",
            name: "Upper Reinforcement",
            exercises: [
                {
                    id: "ex-6-1",
                    name: "Incline DB Press",
                    sets: 2,
                    reps: "8–12",
                    rest: "90 sec",
                    muscleGroup: "Chest",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-6-2",
                    name: "Chest-Supported Row",
                    sets: 3,
                    reps: "8–12",
                    rest: "90 sec",
                    muscleGroup: "Back",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-6-3",
                    name: "Cable Lateral Raise",
                    sets: 2,
                    reps: "12–15",
                    rest: "45 sec",
                    muscleGroup: "Shoulders",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-6-4",
                    name: "Reverse Pec Deck",
                    sets: 2,
                    reps: "12–15",
                    rest: "60 sec",
                    muscleGroup: "Shoulders",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-6-5",
                    name: "Bayesian Cable Curl",
                    sets: 2,
                    reps: "10–15",
                    rest: "60 sec",
                    muscleGroup: "Biceps",
                    notes: "",
                    completed: false
                },
                {
                    id: "ex-6-6",
                    name: "Overhead Cable Extension",
                    sets: 2,
                    reps: "10–15",
                    rest: "60 sec",
                    muscleGroup: "Triceps",
                    notes: "",
                    completed: false
                }
            ]
        },
        {
            id: "day-7",
            name: "Rest",
            exercises: []
        }
    ]
};

// ============================================
// 2. APPLICATION STATE
// ============================================

let appState = {
    workout: null,           // Current workout plan
    currentDayIndex: 0,      // Currently selected day index
    editingExerciseId: null, // Track which exercise is being edited
};

// ============================================
// 3. STORAGE FUNCTIONS
// ============================================

/**
 * Load workout from localStorage or initialize with default
 */
function loadWorkout() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        
        if (saved) {
            // Load existing saved workout
            appState.workout = JSON.parse(saved);
        } else {
            // First visit - create a deep copy of default and save it
            appState.workout = structuredClone(DEFAULT_WORKOUT);
            saveWorkout();
        }
    } catch (error) {
        console.error("Error loading workout:", error);
        // If corruption detected, restore from default
        appState.workout = structuredClone(DEFAULT_WORKOUT);
        saveWorkout();
    }
}

/**
 * Save current workout to localStorage
 */
function saveWorkout() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState.workout));
    } catch (error) {
        console.error("Error saving workout:", error);
        // localStorage full or unavailable
    }
}

/**
 * Reset to default workout with confirmation
 */
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

// ============================================
// 4. UTILITY FUNCTIONS
// ============================================

/**
 * Generate a unique ID
 */
function generateId() {
    return `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Get current selected day
 */
function getCurrentDay() {
    return appState.workout.days[appState.currentDayIndex];
}

/**
 * Get exercise by ID from current day
 */
function getExerciseById(exerciseId) {
    const day = getCurrentDay();
    return day.exercises.find(ex => ex.id === exerciseId);
}

/**
 * Calculate progress for a specific day
 */
function calculateDayProgress(day) {
    if (!day.exercises || day.exercises.length === 0) {
        return { completed: 0, total: 0, percentage: 0 };
    }
    
    const completed = day.exercises.filter(ex => ex.completed).length;
    const total = day.exercises.length;
    const percentage = Math.round((completed / total) * 100);
    
    return { completed, total, percentage };
}

/**
 * Calculate total weekly progress
 */
function calculateWeeklyProgress() {
    let totalCompleted = 0;
    let totalExercises = 0;
    
    appState.workout.days.forEach(day => {
        if (day.exercises) {
            totalExercises += day.exercises.length;
            totalCompleted += day.exercises.filter(ex => ex.completed).length;
        }
    });
    
    const percentage = totalExercises === 0 ? 0 : Math.round((totalCompleted / totalExercises) * 100);
    
    return { completed: totalCompleted, total: totalExercises, percentage };
}

/**
 * Safe HTML escaping to prevent injection
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// 5. MODAL MANAGEMENT
// ============================================

/**
 * Open a modal by ID
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById("modalOverlay");
    
    modal.classList.add("active");
    overlay.classList.add("active");
    
    // Focus first input
    const firstInput = modal.querySelector("input, textarea");
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
}

/**
 * Close a specific modal
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove("active");
    
    // Check if any modals are open
    const openModals = document.querySelectorAll(".modal.active");
    if (openModals.length === 0) {
        document.getElementById("modalOverlay").classList.remove("active");
    }
}

/**
 * Close all open modals
 */
function closeAllModals() {
    document.querySelectorAll(".modal").forEach(modal => {
        modal.classList.remove("active");
    });
    document.getElementById("modalOverlay").classList.remove("active");
}

/**
 * Show confirmation modal
 */
function showConfirmModal(title, message, onConfirm) {
    document.getElementById("confirmTitle").textContent = title;
    document.getElementById("confirmMessage").textContent = message;
    
    const confirmBtn = document.getElementById("confirmAction");
    
    // Remove old listeners
    const newConfirmBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
    
    newConfirmBtn.addEventListener("click", () => {
        onConfirm();
    });
    
    openModal("confirmModal");
}

// ============================================
// 6. RENDERING FUNCTIONS
// ============================================

/**
 * Render the entire application
 */
function render() {
    renderDayNavigation();
    renderDashboard();
    renderExerciseList();
}

/**
 * Render day navigation tabs
 */
function renderDayNavigation() {
    const container = document.getElementById("daysNavigation");
    container.innerHTML = "";
    
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    appState.workout.days.forEach((day, index) => {
        const button = document.createElement("button");
        button.className = "day-tab";
        button.textContent = dayNames[index];
        
        if (index === appState.currentDayIndex) {
            button.classList.add("active");
        }
        
        button.addEventListener("click", () => {
            appState.currentDayIndex = index;
            render();
        });
        
        container.appendChild(button);
    });
}

/**
 * Render dashboard with statistics
 */
function renderDashboard() {
    const currentDay = getCurrentDay();
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const currentDayName = dayNames[appState.currentDayIndex];
    
    // Today's workout name
    document.getElementById("todayWorkoutName").textContent = currentDay.name;
    
    // Exercise count
    const exerciseCount = currentDay.exercises ? currentDay.exercises.length : 0;
    document.getElementById("exerciseCount").textContent = exerciseCount;
    
    // Daily progress
    const dayProgress = calculateDayProgress(currentDay);
    document.getElementById("completedCount").textContent = `${dayProgress.completed} / ${dayProgress.total}`;
    document.getElementById("dailyPercentage").textContent = `${dayProgress.percentage}%`;
    
    // Weekly progress
    const weeklyProgress = calculateWeeklyProgress();
    const progressPercent = weeklyProgress.percentage;
    document.getElementById("weeklyProgressBar").style.width = `${progressPercent}%`;
    document.getElementById("weeklyProgressText").textContent = 
        `${weeklyProgress.completed} / ${weeklyProgress.total} exercises completed`;
}

/**
 * Render exercise list for current day
 */
function renderExerciseList() {
    const currentDay = getCurrentDay();
    const container = document.getElementById("exerciseList");
    const dayTitle = document.getElementById("dayTitle");
    const restMessage = document.getElementById("restDayMessage");
    const addExerciseBtn = document.getElementById("addExerciseBtn");
    const addExerciseSection = document.getElementById("addExerciseSection");
    
    dayTitle.textContent = currentDay.name;
    
    // Handle empty day (rest day)
    if (!currentDay.exercises || currentDay.exercises.length === 0) {
        container.innerHTML = "";
        restMessage.style.display = "block";
        addExerciseSection.style.display = "none";
        return;
    }
    
    restMessage.style.display = "none";
    addExerciseSection.style.display = "block";
    
    container.innerHTML = "";
    
    currentDay.exercises.forEach((exercise, index) => {
        const card = createExerciseCard(exercise, index);
        container.appendChild(card);
    });
}

/**
 * Create an exercise card element
 */
function createExerciseCard(exercise, index) {
    const card = document.createElement("div");
    card.className = `exercise-card ${exercise.completed ? "completed" : ""}`;
    card.dataset.exerciseId = exercise.id;
    
    const dayProgress = calculateDayProgress(getCurrentDay());
    
    card.innerHTML = `
        <div class="exercise-header">
            <input
                type="checkbox"
                class="exercise-checkbox"
                ${exercise.completed ? "checked" : ""}
                data-exercise-id="${exercise.id}"
            />
            <div class="exercise-info">
                <div class="exercise-name">${escapeHtml(exercise.name)}</div>
                <div class="exercise-title-row">
                    <span class="exercise-badge">${exercise.sets} × ${escapeHtml(exercise.reps)}</span>
                    ${exercise.muscleGroup ? `<span class="exercise-badge">${escapeHtml(exercise.muscleGroup)}</span>` : ""}
                </div>
            </div>
        </div>
        
        <div class="exercise-details">
            <div class="detail-row">
                <span class="detail-label">Sets</span>
                <div class="detail-controls">
                    <button class="control-btn btn-decrease" data-exercise-id="${exercise.id}" aria-label="Decrease sets">−</button>
                    <span class="control-value">${exercise.sets}</span>
                    <button class="control-btn btn-increase" data-exercise-id="${exercise.id}" aria-label="Increase sets">+</button>
                </div>
            </div>
            
            <div class="detail-row">
                <span class="detail-label">Reps</span>
                <span class="detail-value">${escapeHtml(exercise.reps)}</span>
            </div>
            
            <div class="detail-row">
                <span class="detail-label">Rest</span>
                <span class="detail-value">${exercise.rest || "—"}</span>
            </div>
            
            <div class="detail-row">
                <span class="detail-label">Muscle Group</span>
                <span class="detail-value">${exercise.muscleGroup || "—"}</span>
            </div>
        </div>
        
        ${exercise.notes ? `
            <div class="exercise-notes">
                ${escapeHtml(exercise.notes)}
            </div>
        ` : ""}
        
        <div class="exercise-actions">
            <div class="action-group">
                <button class="btn-secondary btn-edit" data-exercise-id="${exercise.id}">
                    ✎ Edit
                </button>
                <button class="btn-secondary btn-delete" data-exercise-id="${exercise.id}">
                    × Delete
                </button>
            </div>
            
            <div class="action-group">
                ${index > 0 ? `<button class="btn-secondary btn-move-up" data-exercise-id="${exercise.id}">↑ Up</button>` : ""}
                ${index < getCurrentDay().exercises.length - 1 ? `<button class="btn-secondary btn-move-down" data-exercise-id="${exercise.id}">↓ Down</button>` : ""}
            </div>
        </div>
    `;
    
    // Event listeners
    card.querySelector(".exercise-checkbox").addEventListener("change", (e) => {
        toggleExerciseCompletion(e.target.dataset.exerciseId);
    });
    
    card.querySelector(".btn-edit").addEventListener("click", () => {
        openEditExerciseModal(exercise.id);
    });
    
    card.querySelector(".btn-delete").addEventListener("click", () => {
        deleteExercise(exercise.id);
    });
    
    const btnIncreaseList = card.querySelectorAll(".btn-increase");
    btnIncreaseList.forEach(btn => {
        btn.addEventListener("click", () => {
            changeSets(exercise.id, 1);
        });
    });
    
    const btnDecreaseList = card.querySelectorAll(".btn-decrease");
    btnDecreaseList.forEach(btn => {
        btn.addEventListener("click", () => {
            changeSets(exercise.id, -1);
        });
    });
    
    const btnMoveUp = card.querySelector(".btn-move-up");
    if (btnMoveUp) {
        btnMoveUp.addEventListener("click", () => {
            moveExercise(exercise.id, -1);
        });
    }
    
    const btnMoveDown = card.querySelector(".btn-move-down");
    if (btnMoveDown) {
        btnMoveDown.addEventListener("click", () => {
            moveExercise(exercise.id, 1);
        });
    }
    
    return card;
}

// ============================================
// 7. EXERCISE OPERATIONS
// ============================================

/**
 * Toggle exercise completion state
 */
function toggleExerciseCompletion(exerciseId) {
    const exercise = getExerciseById(exerciseId);
    if (exercise) {
        exercise.completed = !exercise.completed;
        saveWorkout();
        render();
    }
}

/**
 * Change number of sets for an exercise
 */
function changeSets(exerciseId, delta) {
    const exercise = getExerciseById(exerciseId);
    if (exercise) {
        const newSets = exercise.sets + delta;
        if (newSets >= 1 && newSets <= 10) {
            exercise.sets = newSets;
            saveWorkout();
            render();
        }
    }
}

/**
 * Move exercise up or down in list
 */
function moveExercise(exerciseId, direction) {
    const day = getCurrentDay();
    const currentIndex = day.exercises.findIndex(ex => ex.id === exerciseId);
    
    if (currentIndex === -1) return;
    
    const newIndex = currentIndex + direction;
    
    if (newIndex >= 0 && newIndex < day.exercises.length) {
        [day.exercises[currentIndex], day.exercises[newIndex]] = 
        [day.exercises[newIndex], day.exercises[currentIndex]];
        saveWorkout();
        render();
    }
}

/**
 * Delete an exercise with confirmation
 */
function deleteExercise(exerciseId) {
    const exercise = getExerciseById(exerciseId);
    if (!exercise) return;
    
    showConfirmModal(
        "Delete Exercise?",
        `Are you sure you want to delete "${exercise.name}"? This cannot be undone.`,
        () => {
            const day = getCurrentDay();
            day.exercises = day.exercises.filter(ex => ex.id !== exerciseId);
            saveWorkout();
            render();
            closeAllModals();
        }
    );
}

/**
 * Add a new exercise to current day
 */
function addExercise(exerciseData) {
    const day = getCurrentDay();
    
    const newExercise = {
        id: generateId(),
        name: exerciseData.name,
        sets: parseInt(exerciseData.sets) || 3,
        reps: exerciseData.reps || "8–12",
        rest: exerciseData.rest || "",
        muscleGroup: exerciseData.muscleGroup || "",
        notes: exerciseData.notes || "",
        completed: false
    };
    
    day.exercises.push(newExercise);
    saveWorkout();
    render();
}

/**
 * Update an existing exercise
 */
function updateExercise(exerciseId, exerciseData) {
    const exercise = getExerciseById(exerciseId);
    if (!exercise) return;
    
    exercise.name = exerciseData.name;
    exercise.sets = parseInt(exerciseData.sets) || 3;
    exercise.reps = exerciseData.reps || "8–12";
    exercise.rest = exerciseData.rest || "";
    exercise.muscleGroup = exerciseData.muscleGroup || "";
    exercise.notes = exerciseData.notes || "";
    
    saveWorkout();
    render();
}

// ============================================
// 8. DAY OPERATIONS
// ============================================

/**
 * Rename current workout day
 */
function renameCurrentDay(newName) {
    const currentDay = getCurrentDay();
    if (newName.trim()) {
        currentDay.name = newName.trim();
        saveWorkout();
        render();
    }
}

// ============================================
// 9. MODAL HANDLERS - EXERCISE EDITING
// ============================================

/**
 * Open modal to add new exercise
 */
function openAddExerciseModal() {
    appState.editingExerciseId = null;
    
    const form = document.getElementById("exerciseForm");
    form.reset();
    
    document.getElementById("exerciseModalTitle").textContent = "Add Exercise";
    document.getElementById("exerciseSets").value = 3;
    
    openModal("exerciseModal");
}

/**
 * Open modal to edit existing exercise
 */
function openEditExerciseModal(exerciseId) {
    const exercise = getExerciseById(exerciseId);
    if (!exercise) return;
    
    appState.editingExerciseId = exerciseId;
    
    document.getElementById("exerciseModalTitle").textContent = "Edit Exercise";
    document.getElementById("exerciseName").value = exercise.name;
    document.getElementById("exerciseSets").value = exercise.sets;
    document.getElementById("exerciseReps").value = exercise.reps;
    document.getElementById("exerciseRest").value = exercise.rest;
    document.getElementById("exerciseMuscle").value = exercise.muscleGroup;
    document.getElementById("exerciseNotes").value = exercise.notes;
    
    openModal("exerciseModal");
}

/**
 * Handle exercise form submission
 */
function handleExerciseFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById("exerciseName").value.trim();
    const sets = document.getElementById("exerciseSets").value;
    const reps = document.getElementById("exerciseReps").value.trim();
    const rest = document.getElementById("exerciseRest").value.trim();
    const muscleGroup = document.getElementById("exerciseMuscle").value.trim();
    const notes = document.getElementById("exerciseNotes").value.trim();
    
    // Validation
    if (!name) {
        alert("Exercise name is required");
        return;
    }
    
    if (!sets || parseInt(sets) < 1) {
        alert("Sets must be at least 1");
        return;
    }
    
    if (!reps) {
        alert("Reps field is required");
        return;
    }
    
    const exerciseData = { name, sets, reps, rest, muscleGroup, notes };
    
    if (appState.editingExerciseId) {
        updateExercise(appState.editingExerciseId, exerciseData);
    } else {
        addExercise(exerciseData);
    }
    
    closeAllModals();
}

// ============================================
// 10. DAY NAME EDITING
// ============================================

/**
 * Open modal to edit day name
 */
function openEditDayNameModal() {
    const currentDay = getCurrentDay();
    document.getElementById("dayNameInput").value = currentDay.name;
    openModal("editDayModal");
}

/**
 * Handle day name form submission
 */
function handleEditDayNameSubmit(e) {
    e.preventDefault();
    
    const newName = document.getElementById("dayNameInput").value.trim();
    
    if (!newName) {
        alert("Day name cannot be empty");
        return;
    }
    
    renameCurrentDay(newName);
    closeAllModals();
}

// ============================================
// 11. EVENT LISTENERS & INITIALIZATION
// ============================================

/**
 * Set up all event listeners
 */
function setupEventListeners() {
    // Reset button
    document.getElementById("resetBtn").addEventListener("click", resetToDefault);
    
    // Edit day name
    document.getElementById("editDayNameBtn").addEventListener("click", openEditDayNameModal);
    document.getElementById("editDayForm").addEventListener("submit", handleEditDayNameSubmit);
    
    // Add exercise
    document.getElementById("addExerciseBtn").addEventListener("click", openAddExerciseModal);
    document.getElementById("addExerciseToRestBtn").addEventListener("click", openAddExerciseModal);
    
    // Exercise form
    document.getElementById("exerciseForm").addEventListener("submit", handleExerciseFormSubmit);
    
    // Modal close buttons
    document.getElementById("closeDayModal").addEventListener("click", () => closeModal("editDayModal"));
    document.getElementById("closeExerciseModal").addEventListener("click", () => closeModal("exerciseModal"));
    document.getElementById("closeConfirmModal").addEventListener("click", () => closeModal("confirmModal"));
    
    // Modal cancel buttons
    document.getElementById("cancelDayBtn").addEventListener("click", () => closeAllModals());
    document.getElementById("cancelExerciseBtn").addEventListener("click", () => closeAllModals());
    document.getElementById("confirmCancel").addEventListener("click", () => closeAllModals());
    
    // Modal overlay click to close
    document.getElementById("modalOverlay").addEventListener("click", (e) => {
        if (e.target.id === "modalOverlay") {
            closeAllModals();
        }
    });
    
    // Escape key to close modals
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeAllModals();
        }
    });
}

/**
 * Initialize application
 */
function initializeApp() {
    loadWorkout();
    setupEventListeners();
    render();
}

// Start the app when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeApp);
} else {
    initializeApp();
}