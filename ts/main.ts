interface Message {
  from: 'me' | 'them';
  text?: string;
  html?: string;
  time: string;
  datestamp?: string;
}

interface Conversation {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  preview: string;
  time: string;
  unread: number;
  messages: Message[];
}

const conversations: Conversation[] = [
  {
    id: 'about',
    name: 'Your Name',
    initials: 'YN',
    avatarColor: '#007AFF',
    preview: "Hi there! I'm a developer 👋",
    time: 'now',
    unread: 1,
    messages: [
      { from: 'me', text: 'Hey! Tell me about yourself 👋', time: '12:00 PM', datestamp: 'Today' },
      { from: 'them', text: "Hi! I'm Your Name, a developer based in Your City.", time: '12:00 PM' },
      { from: 'them', text: "I enjoy building things that live on the internet — websites, apps, and everything in between.", time: '12:01 PM' },
      { from: 'them', text: "My interest in web dev started back in [year] when I [brief origin story here].", time: '12:01 PM' },
      { from: 'them', text: "Outside of code, you'll find me [hobby], [hobby], or [hobby]. 😄", time: '12:02 PM' },
      { from: 'them', html: '<a href="#" class="bubble-link" download>📎 Resume.pdf</a>', time: '12:03 PM' },
    ],
  },
  {
    id: 'skills',
    name: 'Tech Stack',
    initials: '⚙',
    avatarColor: '#34C759',
    preview: "Here's what I work with 🛠️",
    time: 'Mon',
    unread: 0,
    messages: [
      { from: 'me', text: "What's your tech stack?", time: '10:00 AM', datestamp: 'Monday' },
      { from: 'them', text: "Great question! Here's what I work with 🛠️", time: '10:00 AM' },
      {
        from: 'them',
        html: `<div class="skill-bubble"><strong>Languages</strong>Python · JavaScript · TypeScript · HTML &amp; CSS · SQL</div>`,
        time: '10:01 AM',
      },
      {
        from: 'them',
        html: `<div class="skill-bubble"><strong>Frameworks &amp; Libraries</strong>React · Node.js · Express · Tailwind CSS · NumPy / Pandas</div>`,
        time: '10:01 AM',
      },
      {
        from: 'them',
        html: `<div class="skill-bubble"><strong>Tools &amp; Platforms</strong>Git &amp; GitHub · VS Code · Docker · Linux · Figma</div>`,
        time: '10:02 AM',
      },
    ],
  },
  {
    id: 'projects',
    name: 'Projects',
    initials: '🚀',
    avatarColor: '#FF9500',
    preview: "Here's some of my work 💻",
    time: 'Sun',
    unread: 0,
    messages: [
      { from: 'me', text: 'Can I see some of your projects?', time: '3:00 PM', datestamp: 'Sunday' },
      { from: 'them', text: "Of course! Here's some of my work 💻", time: '3:00 PM' },
      {
        from: 'them',
        html: `<div class="project-bubble">
          <div class="project-bubble-title">Project One</div>
          <div class="project-bubble-desc">A brief description of what this project does, the problem it solves, and what makes it interesting.</div>
          <div class="project-bubble-tech">React · Node.js · MongoDB</div>
          <div class="project-bubble-links"><a href="#">GitHub ↗</a><a href="#">Live Demo ↗</a></div>
        </div>`,
        time: '3:01 PM',
      },
      {
        from: 'them',
        html: `<div class="project-bubble">
          <div class="project-bubble-title">Project Two</div>
          <div class="project-bubble-desc">A brief description of what this project does, the problem it solves, and what makes it interesting.</div>
          <div class="project-bubble-tech">Python · Flask · PostgreSQL</div>
          <div class="project-bubble-links"><a href="#">GitHub ↗</a><a href="#">Live Demo ↗</a></div>
        </div>`,
        time: '3:02 PM',
      },
      {
        from: 'them',
        html: `<div class="project-bubble">
          <div class="project-bubble-title">Project Three</div>
          <div class="project-bubble-desc">A brief description of what this project does, the problem it solves, and what makes it interesting.</div>
          <div class="project-bubble-tech">TypeScript · Next.js · Tailwind</div>
          <div class="project-bubble-links"><a href="#">GitHub ↗</a><a href="#">Live Demo ↗</a></div>
        </div>`,
        time: '3:03 PM',
      },
    ],
  },
  {
    id: 'experience',
    name: 'Experience',
    initials: '💼',
    avatarColor: '#5856D6',
    preview: 'My professional journey...',
    time: 'Sat',
    unread: 0,
    messages: [
      { from: 'me', text: "What's your work experience?", time: '9:00 AM', datestamp: 'Saturday' },
      { from: 'them', text: "Here's my professional journey 💼", time: '9:00 AM' },
      {
        from: 'them',
        html: `<div class="exp-bubble">
          <div class="exp-role">Job Title <span>@ Company Name</span></div>
          <div class="exp-date">Month Year – Present</div>
          <ul>
            <li>Describe a key responsibility or achievement in this role.</li>
            <li>Use strong action verbs and quantify results where possible.</li>
            <li>Keep each bullet to one or two concise sentences.</li>
          </ul>
        </div>`,
        time: '9:01 AM',
      },
      {
        from: 'them',
        html: `<div class="exp-bubble">
          <div class="exp-role">Job Title <span>@ Company Name</span></div>
          <div class="exp-date">Month Year – Month Year</div>
          <ul>
            <li>Describe a key responsibility or achievement in this role.</li>
            <li>Use strong action verbs and quantify results where possible.</li>
            <li>Keep each bullet concise.</li>
          </ul>
        </div>`,
        time: '9:02 AM',
      },
      {
        from: 'them',
        html: `<div class="exp-bubble">
          <div class="exp-role">Degree <span>@ University Name</span></div>
          <div class="exp-date">Year – Year</div>
          <ul>
            <li>Major in [Field]. GPA: X.X / 4.0.</li>
            <li>Relevant coursework: Course A, Course B, Course C.</li>
          </ul>
        </div>`,
        time: '9:03 AM',
      },
    ],
  },
  {
    id: 'contact',
    name: "Let's Chat",
    initials: '✉',
    avatarColor: '#FF2D55',
    preview: 'My inbox is always open 📬',
    time: 'Fri',
    unread: 0,
    messages: [
      { from: 'me', text: 'How can I get in touch?', time: '5:00 PM', datestamp: 'Friday' },
      { from: 'them', text: "My inbox is always open! 📬", time: '5:00 PM' },
      { from: 'them', text: "Whether you have a question, a project idea, or just want to say hello — I'd love to hear from you.", time: '5:01 PM' },
      { from: 'them', html: `<a href="mailto:your.email@example.com" class="contact-link">✉️ Say Hello</a>`, time: '5:01 PM' },
      {
        from: 'them',
        html: `<div class="social-bubble">
          <a href="https://github.com/zhe-jac" target="_blank" rel="noopener">GitHub ↗</a>
          <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener">LinkedIn ↗</a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener">Twitter ↗</a>
        </div>`,
        time: '5:02 PM',
      },
    ],
  },
];

// ─── State ────────────────────────────────────────────────────────────────────

let activeId: string | null = null;

// ─── Element references ───────────────────────────────────────────────────────

const convList    = document.getElementById('conversation-list') as HTMLUListElement;
const chatPane    = document.getElementById('chat-pane') as HTMLElement;
const chatEmpty   = document.getElementById('chat-empty') as HTMLElement;
const sidebar     = document.getElementById('sidebar') as HTMLElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function escapeHtml(str: string): string {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function avatarHtml(initials: string, color: string, size: number): string {
  const fontSize = initials.length > 2 ? Math.round(size * 0.36) : Math.round(size * 0.42);
  return `<div class="conv-avatar" style="background:${color};width:${size}px;height:${size}px;font-size:${fontSize}px">${initials}</div>`;
}

// ─── Conversation list ────────────────────────────────────────────────────────

function renderConversationList(filter: string = ''): void {
  const lower = filter.toLowerCase();
  const filtered = conversations.filter(c => c.name.toLowerCase().includes(lower));

  if (filtered.length === 0) {
    convList.innerHTML = `<li class="conv-empty">No results for "${escapeHtml(filter)}"</li>`;
    return;
  }

  convList.innerHTML = filtered
    .map(
      c => `
      <li class="conv-item${c.id === activeId ? ' active' : ''}"
          data-id="${c.id}"
          role="option"
          aria-selected="${c.id === activeId}">
        ${avatarHtml(c.initials, c.avatarColor, 52)}
        <div class="conv-info">
          <div class="conv-name-row">
            <span class="conv-name">${escapeHtml(c.name)}</span>
            <span class="conv-time">${escapeHtml(c.time)}</span>
          </div>
          <div class="conv-preview-row">
            <span class="conv-preview">${escapeHtml(c.preview)}</span>
            ${c.unread > 0 ? `<span class="conv-badge">${c.unread}</span>` : ''}
          </div>
        </div>
      </li>`
    )
    .join('');

  convList.querySelectorAll<HTMLElement>('.conv-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      if (id) selectConversation(id);
    });
  });
}

// ─── Select & render chat ─────────────────────────────────────────────────────

function selectConversation(id: string): void {
  activeId = id;
  const conv = conversations.find(c => c.id === id);
  if (!conv) return;
  conv.unread = 0;
  renderConversationList(searchInput.value);
  renderChat(conv);
  if (window.innerWidth <= 700) sidebar.classList.add('hidden');
}

function renderChat(conv: Conversation): void {
  chatEmpty.style.display = 'none';

  // Remove previous chat panels
  chatPane.querySelectorAll('.chat-header, .message-thread, .chat-input-area').forEach(el => el.remove());

  // ── Header ──
  const header = document.createElement('div');
  header.className = 'chat-header';
  const avatarSize = 42;
  const avatarFs = conv.initials.length > 2 ? 18 : 16;
  header.innerHTML = `
    <button class="chat-header-back" id="back-btn">
      <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
        <path d="M8 1L1 8l7 7" stroke="#007aff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      &nbsp;Messages
    </button>
    <div class="chat-header-avatar" style="background:${conv.avatarColor};width:${avatarSize}px;height:${avatarSize}px;font-size:${avatarFs}px">${conv.initials}</div>
    <div class="chat-header-name">${escapeHtml(conv.name)}</div>
    <div class="chat-header-info">Personal Portfolio</div>
  `;
  chatPane.appendChild(header);

  header.querySelector('#back-btn')?.addEventListener('click', () => {
    sidebar.classList.remove('hidden');
  });

  // ── Thread ──
  const thread = document.createElement('div');
  thread.className = 'message-thread';

  let prevFrom: 'me' | 'them' | null = null;

  conv.messages.forEach((msg, i) => {
    if (msg.datestamp) {
      const ds = document.createElement('div');
      ds.className = 'msg-datestamp';
      ds.textContent = msg.datestamp;
      thread.appendChild(ds);
    }

    const nextMsg = conv.messages[i + 1];
    const isFirst = prevFrom !== msg.from;
    const isLast  = !nextMsg || nextMsg.from !== msg.from;

    const row = document.createElement('div');
    row.className = `msg-row from-${msg.from}`;
    if (!isFirst) row.classList.add('consecutive');
    if (isLast)   row.classList.add('group-end');
    row.style.animationDelay = `${i * 70}ms`;

    const content = msg.html ?? escapeHtml(msg.text ?? '');

    if (msg.from === 'them') {
      const avatarEl = `<div class="msg-avatar" style="background:${conv.avatarColor}">${conv.initials}</div>`;
      row.innerHTML = `${avatarEl}<div class="bubble">${content}</div>`;
    } else {
      row.innerHTML = `<div class="bubble">${content}</div>`;
    }

    thread.appendChild(row);
    prevFrom = msg.from;
  });

  chatPane.appendChild(thread);
  thread.scrollTop = thread.scrollHeight;

  // ── Input ──
  const inputArea = document.createElement('div');
  inputArea.className = 'chat-input-area';
  inputArea.innerHTML = `
    <button class="input-icon-btn" aria-label="Apps">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" stroke="#007aff" stroke-width="1.5"/>
        <path d="M14 9v10M9 14h10" stroke="#007aff" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <input type="text" class="chat-input-field" placeholder="iMessage" id="msg-input" autocomplete="off" />
    <button class="send-btn" id="send-btn" aria-label="Send">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 12V2M2 7l5-5 5 5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  `;
  chatPane.appendChild(inputArea);

  const msgInput = inputArea.querySelector<HTMLInputElement>('#msg-input')!;
  const sendBtn  = inputArea.querySelector<HTMLButtonElement>('#send-btn')!;

  msgInput.addEventListener('input', () => {
    sendBtn.classList.toggle('active', msgInput.value.trim().length > 0);
  });

  const handleSend = (): void => {
    const text = msgInput.value.trim();
    if (!text) return;
    msgInput.value = '';
    sendBtn.classList.remove('active');
    appendMessage(thread, 'me', text, null, conv);
  };

  msgInput.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  });
  sendBtn.addEventListener('click', handleSend);
}

// ─── Append a message bubble ──────────────────────────────────────────────────

function appendMessage(
  thread: HTMLElement,
  from: 'me' | 'them',
  text: string | null,
  html: string | null,
  conv: Conversation
): void {
  const row = document.createElement('div');
  row.className = `msg-row from-${from} group-end`;
  const content = html ?? escapeHtml(text ?? '');

  if (from === 'them') {
    row.innerHTML = `
      <div class="msg-avatar" style="background:${conv.avatarColor}">${conv.initials}</div>
      <div class="bubble">${content}</div>`;
  } else {
    row.innerHTML = `<div class="bubble">${content}</div>`;
  }

  thread.appendChild(row);
  thread.scrollTop = thread.scrollHeight;

  // Auto-reply in the contact conversation
  if (from === 'me' && conv.id === 'contact') {
    setTimeout(() => {
      appendMessage(
        thread,
        'them',
        "Thanks for reaching out! 🙌 I'll get back to you soon. You can also email me directly at your.email@example.com",
        null,
        conv
      );
    }, 1200);
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────

renderConversationList();

searchInput.addEventListener('input', () => renderConversationList(searchInput.value));

// Open first conversation on desktop by default
if (window.innerWidth > 700) selectConversation(conversations[0].id);
