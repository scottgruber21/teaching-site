<script>
  import { onMount } from 'svelte';

  // State management for form inputs
  let conflictAnswer = '';
  let connectionAnswer = '';
  let submitted = false;

  // Key for localStorage
  const STORAGE_KEY = 'korean_war_exit_ticket';

  // Check for existing submissions on mount
  onMount(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsed = JSON.parse(savedData);
      conflictAnswer = parsed.conflictAnswer || '';
      connectionAnswer = parsed.connectionAnswer || '';
      submitted = true;
    }
  });

  function handleSubmit(event) {
    event.preventDefault();
    
    // Simple validation
    if (!conflictAnswer.trim() || !connectionAnswer.trim()) {
      alert('Please fill out both prompts before submitting.');
      return;
    }

    // Save to localStorage to simulate a persistent data layer
    const dataToSave = { conflictAnswer, connectionAnswer, timestamp: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    
    submitted = true;
  }

  function handleReset() {
    // Allows portfolio reviewers to clear and retry the interaction
    if (confirm('Would you like to clear your answers and try again?')) {
      localStorage.removeItem(STORAGE_KEY);
      conflictAnswer = '';
      connectionAnswer = '';
      submitted = false;
    }
  }
</script>

<div class="exit-ticket-container">
  <div class="ticket-header">
    <h2>Diplomat's Desk: Lesson Exit Ticket</h2>
    <p class="subtitle">Complete the two prompts below to seal your briefing files.</p>
  </div>

  {#if !submitted}
    <form on:submit={handleSubmit} class="ticket-form">
      <div class="form-group">
        <label for="conflict">
          <strong>1. The Conflict:</strong> Why is the border (DMZ) between North and South Korea described as "never truly calm" even though the major fighting stopped in 1953?
        </label>
        <textarea
          id="conflict"
          bind:value={conflictAnswer}
          placeholder="Type your historical analysis here..."
          rows="4"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="connection">
          <strong>2. The Connection:</strong> Pick one item from the handout (e.g., nuclear weapons, the DMZ, or separated families) and explain how it is a direct result of signing an armistice instead of a peace treaty.
        </label>
        <textarea
          id="connection"
          bind:value={connectionAnswer}
          placeholder="Type your systemic connection here..."
          rows="4"
          required
        ></textarea>
      </div>

      <button type="submit" class="submit-btn">
        Submit Briefing to Command
      </button>
    </form>
  {:else}
    <div class="success-state">
      <div class="success-icon">✓</div>
      <h3>Briefing Transmitted Successfully</h3>
      <p>Your responses have been archived locally in the digital field notebook.</p>
      
      <div class="review-box">
        <h4>Your Archived Responses:</h4>
        <div class="review-item">
          <strong>The Conflict:</strong>
          <p>{conflictAnswer}</p>
        </div>
        <div class="review-item">
          <strong>The Connection:</strong>
          <p>{connectionAnswer}</p>
        </div>
      </div>

      <button on:click={handleReset} class="reset-btn">
        Reset Component Interactivity
      </button>
    </div>
  {/if}
</div>

<style>
  .exit-ticket-container {
    background: #1e1e2e;
    border: 1px solid #313244;
    border-radius: 8px;
    padding: 2rem;
    margin-top: 3rem;
    color: #cdd6f4;
  }

  .ticket-header h2 {
    color: #f5c2e7;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    color: #a6adc8;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }

  .ticket-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-size: 1rem;
    line-height: 1.5;
    color: #bac2de;
  }

  textarea {
    background: #11111b;
    border: 1px solid #45475a;
    border-radius: 6px;
    color: #cdd6f4;
    padding: 0.75rem;
    font-family: inherit;
    font-size: 1rem;
    resize: vertical;
    transition: border-color 0.2s ease;
  }

  textarea:focus {
    outline: none;
    border-color: #f5c2e7;
  }

  .submit-btn {
    background: #f5c2e7;
    color: #11111b;
    border: none;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    align-self: flex-start;
    transition: background 0.2s ease;
  }

  .submit-btn:hover {
    background: #cba6f7;
  }

  .success-state {
    text-align: center;
    animation: fadeIn 0.4s ease-out;
  }

  .success-icon {
    font-size: 3rem;
    color: #a6e3a1;
    margin-bottom: 1rem;
  }

  .review-box {
    background: #11111b;
    border: 1px solid #45475a;
    border-radius: 6px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    text-align: left;
  }

  .review-box h4 {
    margin-top: 0;
    color: #f5c2e7;
    border-bottom: 1px solid #313244;
    padding-bottom: 0.5rem;
  }

  .review-item {
    margin-bottom: 1rem;
  }

  .review-item p {
    margin: 0.25rem 0 0 0;
    color: #a6adc8;
    white-space: pre-wrap;
  }

  .reset-btn {
    background: transparent;
    border: 1px dashed #f38ba8;
    color: #f38ba8;
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .reset-btn:hover {
    background: rgba(243, 139, 168, 0.1);
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: opacity: 1; transform: translateY(0); }
  }
</style>