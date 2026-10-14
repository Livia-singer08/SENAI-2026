const suspects = [
    {
        id: "helena",
        name: "Helena Valença",
        age: 52,
        role: "Esposa de Augusto Valença",
        photo: "images/helena.png",
        description: "Helena é casada com Augusto por mais de vinte anos. Por trás da imagem de um casal respeitado, o relacionamento era marcado por afastamentos, discussões discretas e assuntos que nunca eram discutidos diante de outras pessoas.",
        statement: "Eu estava no quarto quando ouvi passos no corredor. Augusto e eu tivemos uma conversa desagradável naquela noite, mas não voltei a vê-lo depois disso.",
        motive: "Uma possível alteração no testamento poderia mudar o futuro de Helena e sua posição na família.",
        alibi: "Afirma ter permanecido no quarto durante parte do período em que a morte ocorreu.",
        suspicion: "Conhecia os hábitos de Augusto e tinha razões pessoais para temer as decisões que ele pretendia tomar. Ainda não há provas conclusivas sobre seu envolvimento no crime."
    },
    {
        id: "marcos",
        name: "Marcos Vieira",
        age: 42,
        role: "Chefe da segurança",
        photo: "images/marcos.png",
        description: "Marcos era responsável pelo sistema de segurança da propriedade. A falha elétrica da noite do crime colocou sua atuação sob suspeita.",
        statement: "A tempestade causou uma interrupção no sistema. Eu estava tentando restabelecer as câmeras e não vi quem entrou no escritório.",
        motive: "Augusto havia ameaçado demiti-lo depois de descobrir falhas nos relatórios de segurança.",
        alibi: "Diz que estava na sala de monitoramento durante a interrupção elétrica.",
        suspicion: "Tinha conhecimento técnico para interferir no sistema, mas isso não comprova participação no homicídio."
    },
    {
        id: "clara",
        name: "Clara Mendes",
        age: 31,
        role: "Secretária particular",
        photo: "images/clara.png",
        description: "Clara administrava a agenda e os documentos particulares de Augusto. Tinha acesso a informações delicadas sobre os negócios do empresário.",
        statement: "Passei parte da noite organizando documentos na biblioteca. Augusto parecia nervoso, mas não me disse o motivo.",
        motive: "Descobriu que seu nome aparecia em documentos de uma negociação controversa.",
        alibi: "Afirma ter ficado na biblioteca até pouco antes das 23h.",
        suspicion: "Possuía informações comprometedoras, embora não exista confirmação de que tenha entrado no escritório no horário estimado da morte."
    },
    {
    id: "rafael",
    name: "Rafael Nogueira",
    age: 38,
    role: "Sócio empresarial",
    photo: "images/rafael.png",
    description: "Rafael era o principal parceiro comercial de Augusto. Apesar da relação profissional aparentemente sólida, os dois vinham enfrentando divergências sobre decisões recentes da empresa.",
    statement: "Saí da mansão naquela noite depois de uma conversa com Augusto. Ele estava preocupado com alguns documentos, mas não me explicou o que pretendia fazer. Depois disso, não tive mais contato com ele.",
    motive: "Uma decisão de Augusto poderia trazer consequências para os negócios e comprometer a reputação de Rafael.",
    alibi: "Afirma que deixou a propriedade antes do horário estimado da morte e que não voltou a encontrar Augusto.",
    suspicion: "Sua versão parece plausível à primeira vista, mas alguns registros da propriedade e detalhes de seu depoimento ainda precisam ser comparados."
    },
    {
        id: "daniel",
        name: "Daniel Ferraz",
        age: 45,
        role: "Advogado da família",
        photo: "images/daniel.png",
        description: "Daniel cuidava de contratos e assuntos jurídicos da família. Conhecia os detalhes do patrimônio de Augusto e as alterações previstas em seus documentos.",
        statement: "Estava no salão principal ao telefone. Não fui ao escritório e não presenciei qualquer discussão.",
        motive: "Uma mudança nos documentos patrimoniais poderia afetar seus interesses profissionais.",
        alibi: "Diz que estava no salão principal durante o período crítico.",
        suspicion: "Tinha conhecimento de assuntos particulares da família, mas seu depoimento ainda não foi diretamente refutado."
    }
];

const evidences = [
    {
        id: "autopsy",
        title: "Relatório da autópsia",
        icon: "✚",
        category: "ANÁLISE FORENSE",
        shortDescription: "Estimativa do horário da morte e características do ferimento.",
        description: [
            "A análise médico-legal estima que Augusto morreu entre 22h50 e 23h10.",
            "O ferimento é compatível com um objeto estreito e rígido, semelhante a um abridor de cartas.",
            "Os exames iniciais não identificaram sinais que sustentem a hipótese de envenenamento."
        ],
        conclusion: "O horário estimado e as características do ferimento ajudam a restringir as hipóteses sobre o crime.",
        required: true
    },
    {
    id: "access",
    title: "Registro de acesso",
    icon: "⌁",
    category: "SEGURANÇA",
    shortDescription: "Um acesso manual ocorreu durante a falha das câmeras.",
    description: [
        "O sistema registrou uma intervenção manual às 22h51, durante a interrupção das câmeras.",
        "A credencial temporária utilizada havia sido liberada para um visitante naquela noite.",
        "O registro não identifica quem estava usando a credencial no momento do acesso."
    ],
    conclusion: "A falha de segurança impede uma identificação imediata, mas o horário pode ser comparado com os registros do portão e os depoimentos.",
    required: true
    },
    {
    id: "gate",
    title: "Registro do portão",
    icon: "▤",
    category: "VIGILÂNCIA",
    shortDescription: "Uma movimentação registrada após a saída dos visitantes.",
    description: [
        "Um veículo associado a um dos visitantes deixou a propriedade às 22h12.",
        "O mesmo veículo foi registrado novamente na entrada às 23h06.",
        "O horário coincide com o intervalo estimado da morte, mas o registro não confirma quem estava no interior do veículo."
    ],
    conclusion: "A movimentação contradiz a ideia de que todos os visitantes foram embora definitivamente. É necessário cruzar esse registro com os outros documentos do caso.",
    required: true
    },
    {
    id: "audit",
    title: "Auditoria financeira",
    icon: "▧",
    category: "DOCUMENTOS",
    shortDescription: "Movimentações financeiras levantaram dúvidas na empresa.",
    description: [
        "Uma auditoria interna identificou transferências não autorizadas realizadas por meio de operações ligadas à empresa.",
        "Anotações de Augusto indicam que ele pretendia revisar os documentos com um de seus sócios na manhã seguinte.",
        "O relatório não identifica, sozinho, quem realizou as operações nem se houve participação de outras pessoas."
    ],
    conclusion: "Os documentos revelam um possível motivo financeiro, mas é necessário cruzar as movimentações com os depoimentos e os registros da mansão.",
    required: true
    },
    {
        id: "watch",
        title: "Relógio quebrado",
        icon: "◷",
        category: "OBJETO PESSOAL",
        shortDescription: "Um relógio foi encontrado danificado perto do escritório.",
        description: [
            "O relógio encontrado no local apresentava danos e ponteiros parados às 23h17.",
            "O mecanismo pode ter parado devido ao impacto sofrido.",
            "Não há comprovação de que o relógio tenha parado exatamente no momento do crime."
        ],
        conclusion: "É uma pista complementar, mas não deve ser utilizada como prova definitiva do horário da morte.",
        required: false
    },
    {
        id: "weapon",
        title: "Abridor de cartas",
        icon: "†",
        category: "OBJETO APREENDIDO",
        shortDescription: "Um objeto compatível com o ferimento foi encontrado.",
        description: [
            "Um abridor de cartas foi encontrado no escritório e apresenta características compatíveis com o ferimento.",
            "Há sinais de limpeza irregular na superfície.",
            "A análise não encontrou impressões digitais conclusivas que permitam identificar quem o manuseou."
        ],
        conclusion: "O objeto é compatível com a hipótese forense, mas não identifica sozinho o responsável.",
        required: false
    }
];

const solution = {
    culprit: "rafael",
    motive: "financial",
    method: "letter_opener",
    requiredEvidence: ["autopsy", "access", "gate", "audit"]
};

const state = {
    currentSection: "contextSection",
    examinedSuspects: new Set(),
    examinedEvidence: new Set(),
    selectedEvidence: new Set(),
    soundEnabled: false,
    audioContext: null,
    masterGain: null,
    pianoTimer: null,
    started: false
};

const elements = {
    homeScreen: document.getElementById("homeScreen"),
    caseScreen: document.getElementById("caseScreen"),
    startButton: document.getElementById("startButton"),
    soundButton: document.getElementById("soundButton"),
    soundIcon: document.getElementById("soundIcon"),
    soundLabel: document.getElementById("soundLabel"),
    logoButton: document.getElementById("logoButton"),
    suspectGrid: document.getElementById("suspectGrid"),
    suspectDetail: document.getElementById("suspectDetail"),
    evidenceGrid: document.getElementById("evidenceGrid"),
    evidenceDetail: document.getElementById("evidenceDetail"),
    evidenceCount: document.getElementById("evidenceCount"),
    progressText: document.getElementById("progressText"),
    progressBar: document.getElementById("progressBar"),
    notebookList: document.getElementById("notebookList"),
    proofSelection: document.getElementById("proofSelection"),
    accusationForm: document.getElementById("accusationForm"),
    culprit: document.getElementById("culprit"),
    motive: document.getElementById("motive"),
    method: document.getElementById("method"),
    reasoning: document.getElementById("reasoning"),
    reasoningCount: document.getElementById("reasoningCount"),
    verdictPanel: document.getElementById("verdictPanel")
};

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        return entities[character];
    });
}

function showScreen(screen) {
    elements.homeScreen.classList.toggle("active", screen === "home");
    elements.caseScreen.classList.toggle("active", screen === "case");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function startInvestigation() {
    state.started = true;
    showScreen("case");
    navigateTo("contextSection");
    playSoundEffect("click");
    updateProgress();
}

function returnHome() {
    showScreen("home");
}

function navigateTo(sectionId) {
    const section = document.getElementById(sectionId);

    if (!section || !section.classList.contains("case-section")) {
        return;
    }

    state.currentSection = sectionId;

    document.querySelectorAll(".case-section").forEach(item => {
        item.classList.toggle("active", item.id === sectionId);
    });

    document.querySelectorAll(".nav-tab").forEach(button => {
        button.classList.toggle("active", button.dataset.target === sectionId);
        button.setAttribute(
            "aria-current",
            button.dataset.target === sectionId ? "page" : "false"
        );
    });

    updateProgress();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function renderSuspects() {
    elements.suspectGrid.innerHTML = suspects.map((suspect, index) => `
        <article
            class="suspect-card"
            data-suspect-id="${suspect.id}"
            tabindex="0"
            role="button"
            aria-label="Consultar ${escapeHTML(suspect.name)}"
            aria-pressed="false"
        >
            <div class="suspect-photo">
                <span class="suspect-photo-number">SUSPEITO 0${index + 1}</span>
                <img
                    src="${suspect.photo}"
                    alt="Retrato de ${escapeHTML(suspect.name)}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >
            </div>
            <div class="suspect-card-content">
                <h3>${escapeHTML(suspect.name)}</h3>
                <p>${suspect.age} anos</p>
                <p class="suspect-role">${escapeHTML(suspect.role)}</p>
            </div>
        </article>
    `).join("");

    elements.suspectGrid.querySelectorAll(".suspect-card").forEach(card => {
        const selectCard = () => selectSuspect(card.dataset.suspectId);

        card.addEventListener("click", selectCard);

        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                selectCard();
            }
        });
    });
}

function selectSuspect(suspectId) {
    const suspect = suspects.find(item => item.id === suspectId);

    if (!suspect) return;

    state.examinedSuspects.add(suspectId);

    elements.suspectGrid.querySelectorAll(".suspect-card").forEach(card => {
        const selected = card.dataset.suspectId === suspectId;
        card.classList.toggle("selected", selected);
        card.setAttribute("aria-pressed", String(selected));
    });

    elements.suspectDetail.innerHTML = `
        <p class="detail-label">ARQUIVO INDIVIDUAL · ${escapeHTML(suspect.name.toUpperCase())}</p>
        <h3>${escapeHTML(suspect.name)}</h3>
        <p>${escapeHTML(suspect.description)}</p>
        <span class="detail-label">DEPOIMENTO</span>
        <p>“${escapeHTML(suspect.statement)}”</p>
        <span class="detail-label">POSSÍVEL MOTIVO</span>
        <p>${escapeHTML(suspect.motive)}</p>
        <span class="detail-label">ÁLIBI DECLARADO</span>
        <p>${escapeHTML(suspect.alibi)}</p>
        <span class="detail-label">ANÁLISE INVESTIGATIVA</span>
        <p>${escapeHTML(suspect.suspicion)}</p>
    `;

    playSoundEffect("click");
    updateProgress();
}

function renderEvidence() {
    elements.evidenceGrid.innerHTML = evidences.map(evidence => `
        <button
            class="evidence-card"
            type="button"
            data-evidence-id="${evidence.id}"
            aria-pressed="false"
        >
            <span class="evidence-icon">${evidence.icon}</span>
            <span>
                <h3>${escapeHTML(evidence.title)}</h3>
                <p>${escapeHTML(evidence.shortDescription)}</p>
                <span class="evidence-status-label" data-status-for="${evidence.id}">
                    ${state.examinedEvidence.has(evidence.id) ? "EXAMINADA" : "NÃO EXAMINADA"}
                </span>
            </span>
        </button>
    `).join("");

    elements.evidenceGrid.querySelectorAll(".evidence-card").forEach(card => {
        card.addEventListener("click", () => {
            selectEvidence(card.dataset.evidenceId);
        });

        card.classList.toggle("selected", state.selectedEvidence.has(card.dataset.evidenceId));
    });

    renderNotebook();
    renderProofSelection();
}

function selectEvidence(evidenceId) {
    const evidence = evidences.find(item => item.id === evidenceId);

    if (!evidence) return;

    state.examinedEvidence.add(evidenceId);

    elements.evidenceGrid.querySelectorAll(".evidence-card").forEach(card => {
        const active = card.dataset.evidenceId === evidenceId;

        card.classList.toggle("active", active);
        card.classList.toggle("selected", state.selectedEvidence.has(card.dataset.evidenceId));
        card.setAttribute("aria-pressed", String(active));
    });

    elements.evidenceDetail.innerHTML = `
        <p class="detail-label">${escapeHTML(evidence.category)}</p>
        <h3>${escapeHTML(evidence.title)}</h3>
        ${evidence.description.map(paragraph => `<p>${escapeHTML(paragraph)}</p>`).join("")}
        <p><strong>CONCLUSÃO:</strong> ${escapeHTML(evidence.conclusion)}</p>
        <label>
            <input
                type="checkbox"
                data-proof-checkbox="${evidence.id}"
                ${state.selectedEvidence.has(evidence.id) ? "checked" : ""}
            >
            <span>Adicionar esta evidência à minha acusação</span>
        </label>
    `;

    const checkbox = elements.evidenceDetail.querySelector("[data-proof-checkbox]");

    checkbox.addEventListener("change", event => {
        setEvidenceSelected(evidenceId, event.target.checked);
    });

    const statusLabel = elements.evidenceGrid.querySelector(
        `[data-status-for="${evidenceId}"]`
    );

    if (statusLabel) statusLabel.textContent = "EXAMINADA";

    renderNotebook();
    renderProofSelection();
    updateProgress();
    playSoundEffect("click");
}

function setEvidenceSelected(evidenceId, selected) {
    if (selected) {
        state.selectedEvidence.add(evidenceId);
    } else {
        state.selectedEvidence.delete(evidenceId);
    }

    const card = elements.evidenceGrid.querySelector(
        `[data-evidence-id="${evidenceId}"]`
    );

    if (card) card.classList.toggle("selected", selected);

    const detailCheckbox = elements.evidenceDetail.querySelector(
        `[data-proof-checkbox="${evidenceId}"]`
    );

    if (detailCheckbox) detailCheckbox.checked = selected;

    renderNotebook();
    renderProofSelection();
    updateProgress();
    playSoundEffect("click");
}

function renderNotebook() {
    const selected = evidences.filter(evidence =>
        state.selectedEvidence.has(evidence.id)
    );

    if (selected.length === 0) {
        elements.notebookList.innerHTML = `
            <p class="empty-notebook">Nenhuma evidência selecionada.</p>
        `;
        return;
    }

    elements.notebookList.innerHTML = selected.map(evidence => `
        <label>
            <input
                type="checkbox"
                data-notebook-checkbox="${evidence.id}"
                checked
            >
            <span>${escapeHTML(evidence.title)}</span>
        </label>
    `).join("");

    elements.notebookList.querySelectorAll("[data-notebook-checkbox]").forEach(checkbox => {
        checkbox.addEventListener("change", event => {
            setEvidenceSelected(
                checkbox.dataset.notebookCheckbox,
                event.target.checked
            );
        });
    });
}

function renderProofSelection() {
    const selected = evidences.filter(evidence =>
        state.selectedEvidence.has(evidence.id)
    );

    if (!elements.proofSelection) return;

    elements.proofSelection.innerHTML = selected.length
        ? selected.map(evidence => `
            <label>
                <input
                    type="checkbox"
                    data-accusation-proof="${evidence.id}"
                    checked
                >
                <span>${escapeHTML(evidence.title)}</span>
            </label>
        `).join("")
        : `<p class="empty-notebook">Selecione as provas na seção de evidências.</p>`;

    elements.proofSelection.querySelectorAll("[data-accusation-proof]").forEach(checkbox => {
        checkbox.addEventListener("change", event => {
            setEvidenceSelected(
                checkbox.dataset.accusationProof,
                event.target.checked
            );
        });
    });

    const count = document.getElementById("proofSelectionCount");

    if (count) count.textContent = String(selected.length);
}

function updateProgress() {
    const examinedEvidenceCount = state.examinedEvidence.size;
    const examinedSuspectCount = state.examinedSuspects.size;
    const selectedEvidenceCount = state.selectedEvidence.size;

    const totalPoints = suspects.length + evidences.length + 3;
    const completedPoints = examinedSuspectCount + examinedEvidenceCount +
        Math.min(selectedEvidenceCount, 3);

    const percentage = Math.min(
        100,
        Math.round((completedPoints / totalPoints) * 100)
    );

    elements.progressBar.style.width = `${percentage}%`;
    elements.progressText.textContent = `${percentage}% concluído`;
    elements.evidenceCount.textContent = `${examinedEvidenceCount} / ${evidences.length}`;

    const footer = document.getElementById("caseProgressFooter");

    if (footer) footer.dataset.progress = String(percentage);
}

function updateReasoningCount() {
    elements.reasoningCount.textContent = `${elements.reasoning.value.length} caracteres`;
}

function evaluateAccusation(event) {
    event.preventDefault();

    const culprit = elements.culprit.value;
    const motive = elements.motive.value;
    const method = elements.method.value;
    const reasoning = elements.reasoning.value.trim();

    const correctCulprit = culprit === solution.culprit;
    const correctMotive = motive === solution.motive;
    const correctMethod = method === solution.method;

    const selectedRequiredEvidence = solution.requiredEvidence.every(id =>
        state.selectedEvidence.has(id)
    );

    const enoughEvidence = state.selectedEvidence.size >= 3;
    const enoughInvestigation = state.examinedSuspects.size >= 3;
    const enoughReasoning = reasoning.length >= 30;

    if (!enoughInvestigation) {
        showVerdict(
            false,
            "Investigação incompleta",
            "Você precisa examinar pelo menos três suspeitos antes de concluir o caso. Volte aos interrogatórios e compare os depoimentos."
        );
        return;
    }

    if (!enoughEvidence) {
        showVerdict(
            false,
            "Provas insuficientes",
            "Selecione pelo menos três evidências para sustentar sua acusação. Uma conclusão exige mais do que suspeitas."
        );
        return;
    }

    if (!enoughReasoning) {
        showVerdict(
            false,
            "Justificativa insuficiente",
            "Explique seu raciocínio com pelo menos 30 caracteres, relacionando as evidências aos fatos do caso."
        );
        return;
    }

    if (
        correctCulprit &&
        correctMotive &&
        correctMethod &&
        selectedRequiredEvidence
    ) {
        showVerdict(
            true,
            "CASO SOLUCIONADO",
            "Sua investigação revelou a verdade. Rafael Nogueira matou Augusto Valença para impedir que a auditoria expusesse as movimentações financeiras. O registro de acesso, o retorno do veículo e os resultados forenses contradizem seu depoimento e sustentam a conclusão. A investigação foi concluída."
        );

        playSoundEffect("success");
        state.started = false;
        return;
    }

    const feedback = [];

    if (!correctCulprit) {
        feedback.push("O suspeito escolhido não é sustentado pelo conjunto completo das provas.");
    }

    if (!correctMotive) {
        feedback.push("O motivo selecionado não corresponde à principal linha financeira da investigação.");
    }

    if (!correctMethod) {
        feedback.push("O método indicado não corresponde às conclusões do relatório forense.");
    }

    if (!selectedRequiredEvidence) {
        feedback.push("Faltam evidências fundamentais. Reavalie a autópsia, o registro de acesso, o registro do portão e a auditoria financeira.");
    }

    showVerdict(
        false,
        "A acusação não foi confirmada",
        `${feedback.join(" ")} Reexamine os relatórios e tente novamente.`
    );

    playSoundEffect("failure");
}

function showVerdict(success, title, message) {
    elements.verdictPanel.className = `verdict-panel visible ${success ? "success" : "failure"}`;

    elements.verdictPanel.innerHTML = `
        <h3>${escapeHTML(title)}</h3>
        <p>${escapeHTML(message)}</p>
        ${success ? `
            <button class="primary-button" id="restartButton" type="button">
                <span>REINICIAR INVESTIGAÇÃO</span>
                <span class="button-arrow">↻</span>
            </button>
        ` : `
            <button class="primary-button" id="reviewButton" type="button">
                <span>REVISAR EVIDÊNCIAS</span>
                <span class="button-arrow">→</span>
            </button>
        `}
    `;

    const restartButton = document.getElementById("restartButton");
    const reviewButton = document.getElementById("reviewButton");

    if (restartButton) {
        restartButton.addEventListener("click", resetInvestigation);
    }

    if (reviewButton) {
        reviewButton.addEventListener("click", () => {
            navigateTo("evidenceSection");
        });
    }

    elements.verdictPanel.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function resetInvestigation() {
    state.examinedSuspects.clear();
    state.examinedEvidence.clear();
    state.selectedEvidence.clear();
    state.started = false;

    elements.accusationForm.reset();
    elements.verdictPanel.className = "verdict-panel";
    elements.verdictPanel.innerHTML = "";

    elements.suspectDetail.innerHTML = `
        <div class="detail-placeholder">
            <span class="detail-cross">✦</span>
            <p>Selecione um suspeito para consultar seu depoimento.</p>
        </div>
    `;

    elements.evidenceDetail.innerHTML = `
        <p>Selecione uma evidência para abrir o relatório de análise.</p>
    `;

    renderSuspects();
    renderEvidence();
    updateReasoningCount();
    updateProgress();
    navigateTo("contextSection");
    showScreen("case");
    playSoundEffect("click");
}

function ensureAudioContext() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return null;

    if (!state.audioContext) {
        state.audioContext = new AudioContextClass();
        state.masterGain = state.audioContext.createGain();
        state.masterGain.gain.value = 0.0001;
        state.masterGain.connect(state.audioContext.destination);
    }

    return state.audioContext;
}

function playPianoNote(frequency, delay = 0, duration = 2.8, volume = 0.12) {
    const audio = ensureAudioContext();

    if (!audio || !state.masterGain || !state.soundEnabled) return;

    const startTime = audio.currentTime + delay;

    const fundamental = audio.createOscillator();
    const secondHarmonic = audio.createOscillator();
    const thirdHarmonic = audio.createOscillator();

    const fundamentalGain = audio.createGain();
    const secondGain = audio.createGain();
    const thirdGain = audio.createGain();

    const filter = audio.createBiquadFilter();

    fundamental.type = "triangle";
    fundamental.frequency.setValueAtTime(frequency, startTime);

    secondHarmonic.type = "sine";
    secondHarmonic.frequency.setValueAtTime(frequency * 2, startTime);

    thirdHarmonic.type = "sine";
    thirdHarmonic.frequency.setValueAtTime(frequency * 3, startTime);

    filter.type = "lowpass";
    filter.frequency.value = 2400;

    fundamentalGain.gain.setValueAtTime(0.0001, startTime);
    fundamentalGain.gain.exponentialRampToValueAtTime(volume, startTime + 0.025);
    fundamentalGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    secondGain.gain.setValueAtTime(0.0001, startTime);
    secondGain.gain.exponentialRampToValueAtTime(volume * 0.25, startTime + 0.02);
    secondGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 0.65);

    thirdGain.gain.setValueAtTime(0.0001, startTime);
    thirdGain.gain.exponentialRampToValueAtTime(volume * 0.08, startTime + 0.02);
    thirdGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 0.4);

    fundamental.connect(filter);
    filter.connect(fundamentalGain);
    fundamentalGain.connect(state.masterGain);

    secondHarmonic.connect(secondGain);
    secondGain.connect(state.masterGain);

    thirdHarmonic.connect(thirdGain);
    thirdGain.connect(state.masterGain);

    fundamental.start(startTime);
    secondHarmonic.start(startTime);
    thirdHarmonic.start(startTime);

    fundamental.stop(startTime + duration + 0.05);
    secondHarmonic.stop(startTime + duration * 0.7);
    thirdHarmonic.stop(startTime + duration * 0.45);

    fundamental.onended = () => {
        fundamental.disconnect();
        fundamentalGain.disconnect();
        filter.disconnect();
    };

    secondHarmonic.onended = () => {
        secondHarmonic.disconnect();
        secondGain.disconnect();
    };

    thirdHarmonic.onended = () => {
        thirdHarmonic.disconnect();
        thirdGain.disconnect();
    };
}

function startPiano() {
    if (state.pianoTimer) {
        clearTimeout(state.pianoTimer);
        state.pianoTimer = null;
    }

    const melody = [
        { note: 220.00, delay: 0, duration: 3.4, volume: 0.11 },
        { note: 164.81, delay: 1.4, duration: 3.0, volume: 0.09 },
        { note: 233.08, delay: 3.1, duration: 3.5, volume: 0.10 },
        { note: 196.00, delay: 5.0, duration: 3.4, volume: 0.10 },
        { note: 146.83, delay: 7.0, duration: 3.5, volume: 0.11 },
        { note: 207.65, delay: 8.8, duration: 3.0, volume: 0.09 },
        { note: 174.61, delay: 10.7, duration: 3.6, volume: 0.10 },
        { note: 155.56, delay: 12.6, duration: 3.5, volume: 0.10 }
    ];

    function playPhrase() {
        if (!state.soundEnabled) return;

        melody.forEach(item => {
            playPianoNote(item.note, item.delay, item.duration, item.volume);
        });

        playPianoNote(110, 0, 4.5, 0.07);
        playPianoNote(82.41, 6.8, 4.5, 0.055);

        state.pianoTimer = setTimeout(playPhrase, 17000);
    }

    playPhrase();
}

async function startAmbientSound() {
    const audio = ensureAudioContext();

    if (!audio || !state.masterGain) {
        elements.soundLabel.textContent = "ÁUDIO INDISPONÍVEL";
        return;
    }

    try {
        await audio.resume();

        if (state.soundEnabled) return;

        state.soundEnabled = true;

        elements.soundIcon.textContent = "♫";
        elements.soundLabel.textContent = "PIANO DE SUSPENSE ATIVO";
        elements.soundButton.setAttribute("aria-pressed", "true");

        state.masterGain.gain.cancelScheduledValues(audio.currentTime);
        state.masterGain.gain.setTargetAtTime(0.7, audio.currentTime, 0.5);

        startPiano();
    } catch (error) {
        elements.soundLabel.textContent = "CLIQUE PARA ATIVAR O SOM";
        elements.soundButton.setAttribute("aria-pressed", "false");
    }
}

function stopAmbientSound() {
    state.soundEnabled = false;

    if (state.pianoTimer) {
        clearTimeout(state.pianoTimer);
        state.pianoTimer = null;
    }

    if (state.audioContext && state.masterGain) {
        const audio = state.audioContext;

        state.masterGain.gain.cancelScheduledValues(audio.currentTime);
        state.masterGain.gain.setTargetAtTime(0.0001, audio.currentTime, 0.15);
    }

    elements.soundIcon.textContent = "♫";
    elements.soundLabel.textContent = "PIANO PAUSADO";
    elements.soundButton.setAttribute("aria-pressed", "false");
}

async function toggleSound() {
    if (state.soundEnabled) {
        stopAmbientSound();
    } else {
        await startAmbientSound();
    }
}

function playSoundEffect(type) {
    if (!state.soundEnabled) return;

    if (type === "click") {
        playPianoNote(523.25, 0, 0.12, 0.025);
    }

    if (type === "success") {
        playPianoNote(392, 0, 0.8, 0.07);
        playPianoNote(523.25, 0.2, 1.0, 0.06);
        playPianoNote(659.25, 0.4, 1.2, 0.05);
    }

    if (type === "failure") {
        playPianoNote(155.56, 0, 0.8, 0.06);
        playPianoNote(130.81, 0.25, 1.0, 0.05);
    }
}

function setupNavigation() {
    elements.startButton.addEventListener("click", () => {
        startInvestigation();

        if (!state.soundEnabled) {
            startAmbientSound();
        }
    });

    elements.logoButton.addEventListener("click", () => {
        if (elements.caseScreen.classList.contains("active")) {
            navigateTo("contextSection");
        } else {
            showScreen("home");
        }
    });

    elements.soundButton.addEventListener("click", toggleSound);

    document.querySelectorAll(".nav-tab").forEach(button => {
        button.addEventListener("click", () => {
            navigateTo(button.dataset.target);
            playSoundEffect("click");
        });
    });

    document.querySelectorAll("[data-next]").forEach(button => {
        button.addEventListener("click", () => {
            navigateTo(button.dataset.next);
            playSoundEffect("click");
        });
    });

    elements.accusationForm.addEventListener("submit", evaluateAccusation);
    elements.reasoning.addEventListener("input", updateReasoningCount);
}

function initializeGame() {
    renderSuspects();
    renderEvidence();
    setupNavigation();
    updateReasoningCount();
    updateProgress();

    elements.suspectDetail.innerHTML = `
        <div class="detail-placeholder">
            <span class="detail-cross">✦</span>
            <p>Selecione um suspeito para consultar seu depoimento.</p>
        </div>
    `;

    elements.evidenceDetail.innerHTML = `
        <p>Selecione uma evidência para abrir o relatório de análise.</p>
    `;

    showScreen("home");
}

initializeGame();