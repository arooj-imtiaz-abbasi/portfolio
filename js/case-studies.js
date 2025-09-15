// Case Studies JavaScript functionality

// Case study data
const caseStudies = {
    case1: {
        title: "Panic Disorder Management",
        category: "Anxiety",
        duration: "12 sessions",
        presentingProblem: "A 24-year-old university student presented with recurrent panic attacks, characterized by sudden onset of intense fear, chest pain, shortness of breath, and fear of losing control. The client reported avoiding crowded places, public transportation, and social gatherings due to fear of having a panic attack.",
        assessmentTools: [
            "Clinical Interview",
            "GAD-7 (Generalized Anxiety Disorder Scale)",
            "Panic Disorder Severity Scale (PDSS)",
            "Daily panic diary tracking"
        ],
        interventions: [
            "Cognitive Behavioral Therapy (CBT) panic protocol",
            "Interoceptive exposure exercises",
            "Breathing retraining and relaxation techniques",
            "Cognitive restructuring for catastrophic thinking",
            "Gradual exposure to avoided situations"
        ],
        courseOfTherapy: "The therapy began with psychoeducation about panic attacks and the fight-or-flight response. The client learned to identify and challenge catastrophic thoughts about physical sensations. Interoceptive exposure exercises were introduced to help the client become comfortable with panic-like sensations. Gradual exposure to avoided situations was implemented with a hierarchy of anxiety-provoking situations.",
        outcome: "After 12 sessions, the client reported a 75% reduction in panic attack frequency and intensity. The client successfully returned to using public transportation and attending social gatherings. The client developed effective coping strategies and reported increased confidence in managing anxiety symptoms.",
        keyTakeaways: "Stepped homework assignments significantly improved treatment outcomes. The combination of cognitive restructuring and exposure therapy proved most effective for this client. Regular practice of breathing techniques was crucial for long-term success.",
        techniques: ["CBT", "Exposure Therapy", "GAD-7"]
    },
    case2: {
        title: "Academic Anxiety & Career Indecision",
        category: "Career",
        duration: "8 sessions",
        presentingProblem: "An 18-year-old high school senior presented with severe test anxiety, perfectionism, and uncertainty about future career choices. The client reported physical symptoms during exams including nausea, sweating, and racing heart. Academic performance had declined despite high intelligence and previous academic success.",
        assessmentTools: [
            "Career Interest Inventory",
            "Holland's RIASEC assessment",
            "Test Anxiety Inventory",
            "Academic performance review"
        ],
        interventions: [
            "Career counseling and exploration",
            "CBT for performance anxiety",
            "Study skills and test-taking strategies",
            "Mindfulness and relaxation techniques",
            "Goal setting and decision-making skills"
        ],
        courseOfTherapy: "The therapy focused on identifying the client's interests, values, and strengths through career assessments. Cognitive restructuring addressed perfectionistic thinking patterns. The client learned effective study strategies and test-taking techniques. Mindfulness practices were introduced to manage anxiety during exams.",
        outcome: "The client identified a clear career path in psychology and applied to relevant university programs. Test anxiety decreased by 60% as measured by self-report and academic performance. The client developed effective study habits and time management skills.",
        keyTakeaways: "Career indecision often stems from anxiety rather than lack of interest. Addressing both academic anxiety and career exploration simultaneously was most effective. The client's perfectionism was both a strength and a barrier that needed careful management.",
        techniques: ["Career Counseling", "CBT", "Interest Inventory"]
    },
    case3: {
        title: "Family Therapy for Marital Conflict",
        category: "Family",
        duration: "16 sessions",
        presentingProblem: "A family with two parents and two children (ages 8 and 12) presented with ongoing marital conflict, communication breakdown, and behavioral issues in the children. The parents reported frequent arguments, different parenting styles, and the children showing signs of anxiety and acting out behaviors.",
        assessmentTools: [
            "Family interview and genogram",
            "Behavioral observations",
            "Parent-child interaction assessment",
            "Marital satisfaction questionnaire"
        ],
        interventions: [
            "Family systems therapy",
            "Communication skills training",
            "Parent management techniques",
            "Conflict resolution strategies",
            "Individual sessions with children"
        ],
        courseOfTherapy: "The therapy began with individual sessions to understand each family member's perspective. Family sessions focused on improving communication patterns and establishing clear boundaries. Parent management training helped develop consistent discipline strategies. The children received individual support for anxiety management.",
        outcome: "Family communication improved significantly with 80% reduction in daily conflicts. The children's behavioral issues decreased, and their anxiety symptoms were better managed. The parents reported increased marital satisfaction and developed effective co-parenting strategies.",
        keyTakeaways: "Family therapy requires addressing individual needs within the family system. Consistent parenting approaches are crucial for child behavioral improvement. Communication skills training benefits all family members and improves overall family functioning.",
        techniques: ["Family Therapy", "Parent Training", "Communication Skills"]
    },
    case4: {
        title: "Social Anxiety & Self-Esteem",
        category: "Anxiety",
        duration: "10 sessions",
        presentingProblem: "A 26-year-old marketing professional presented with social anxiety, low self-esteem, and difficulty in workplace social interactions. The client reported avoiding meetings, networking events, and social gatherings. Performance reviews indicated excellent technical skills but concerns about communication and leadership potential.",
        assessmentTools: [
            "Social Phobia Inventory (SPIN)",
            "Rosenberg Self-Esteem Scale",
            "Clinical interview",
            "Workplace performance assessment"
        ],
        interventions: [
            "Cognitive Behavioral Therapy (CBT)",
            "Social skills training",
            "Exposure therapy for social situations",
            "Self-esteem building exercises",
            "Assertiveness training"
        ],
        courseOfTherapy: "The therapy began with identifying negative self-beliefs and social fears. The client learned to challenge distorted thinking about social situations. Social skills training included conversation starters, active listening, and non-verbal communication. Gradual exposure to increasingly challenging social situations was implemented.",
        outcome: "The client's social anxiety decreased by 70% as measured by standardized assessments. Workplace performance improved, and the client received positive feedback on communication skills. The client successfully attended networking events and reported increased confidence in social situations.",
        keyTakeaways: "Social anxiety often masks underlying self-esteem issues that need to be addressed. Workplace social skills can be learned and improved with practice. The combination of cognitive restructuring and behavioral exposure was most effective for this client.",
        techniques: ["CBT", "Social Skills", "Self-Esteem"]
    },
    case5: {
        title: "Parent-Child Relationship Issues",
        category: "Family",
        duration: "14 sessions",
        presentingProblem: "A single mother with a 10-year-old son presented with behavioral problems, defiance, and poor academic performance. The mother reported feeling overwhelmed, inconsistent discipline, and difficulty managing the child's tantrums. The child showed signs of attention-seeking behavior and emotional dysregulation.",
        assessmentTools: [
            "Parent-child interaction observation",
            "Behavioral assessment scales",
            "Academic performance review",
            "Family stress inventory"
        ],
        interventions: [
            "Parent management training",
            "Behavioral therapy techniques",
            "Emotional regulation training for child",
            "Family communication skills",
            "Stress management for parent"
        ],
        courseOfTherapy: "The therapy focused on teaching the mother effective discipline strategies and positive reinforcement techniques. The child learned emotional regulation skills and appropriate ways to express needs. Family sessions improved communication patterns and established consistent routines.",
        outcome: "The child's behavioral problems decreased by 65%, and academic performance improved significantly. The mother reported feeling more confident in her parenting abilities and less stressed. The parent-child relationship improved with better communication and mutual respect.",
        keyTakeaways: "Consistent discipline and positive reinforcement are crucial for behavioral change. Parent stress management is essential for effective parenting. Children respond well to clear expectations and emotional support.",
        techniques: ["Parent Training", "Behavioral Therapy", "Family Systems"]
    },
    case6: {
        title: "Workplace Stress & Burnout",
        category: "Career",
        duration: "6 sessions",
        presentingProblem: "A 32-year-old project manager presented with symptoms of burnout, chronic stress, and work-life imbalance. The client reported working 60+ hours per week, difficulty sleeping, irritability, and physical symptoms including headaches and muscle tension. Job satisfaction had significantly decreased despite previous high performance.",
        assessmentTools: [
            "Maslach Burnout Inventory",
            "Perceived Stress Scale",
            "Work-life balance assessment",
            "Physical health screening"
        ],
        interventions: [
            "Stress management techniques",
            "Cognitive restructuring for work-related thoughts",
            "Time management and boundary setting",
            "Mindfulness and relaxation training",
            "Career counseling and goal setting"
        ],
        courseOfTherapy: "The therapy focused on identifying sources of stress and developing coping strategies. The client learned to set boundaries between work and personal life. Mindfulness practices were introduced for stress reduction. Career counseling helped the client reassess priorities and develop a more sustainable work approach.",
        outcome: "The client's stress levels decreased by 50% as measured by standardized assessments. Work hours were reduced to 45 hours per week with maintained productivity. The client reported improved sleep, better work-life balance, and increased job satisfaction.",
        keyTakeaways: "Burnout prevention requires proactive stress management and boundary setting. Work-life balance is essential for long-term career success. Mindfulness and relaxation techniques are effective for managing workplace stress.",
        techniques: ["Stress Management", "CBT", "Mindfulness"]
    }
};

// Initialize case studies functionality
document.addEventListener('DOMContentLoaded', function() {
    initFilterButtons();
    initCaseCards();
});

// Filter functionality
function initFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const caseCards = document.querySelectorAll('.case-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-mental-teal', 'text-white');
                btn.classList.add('bg-white', 'text-mental-teal', 'border-2', 'border-mental-teal');
            });
            
            button.classList.add('active', 'bg-mental-teal', 'text-white');
            button.classList.remove('bg-white', 'text-mental-teal', 'border-2', 'border-mental-teal');
            
            // Filter cases
            const filter = button.dataset.filter;
            
            caseCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    card.classList.add('animate-fadeInUp');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Case card interactions
function initCaseCards() {
    const caseCards = document.querySelectorAll('.case-card');
    
    caseCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking the "View Details" button
            if (e.target.tagName === 'BUTTON') return;
            
            const category = card.dataset.category;
            const caseId = getCaseIdByCategory(category);
            if (caseId) {
                openCaseModal(caseId);
            }
        });
    });
}

// Get case ID by category (simplified for demo)
function getCaseIdByCategory(category) {
    const categoryMap = {
        'anxiety': 'case1',
        'career': 'case2',
        'family': 'case3'
    };
    return categoryMap[category] || 'case1';
}

// Open case modal
function openCaseModal(caseId) {
    const modal = document.getElementById('case-modal');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');
    
    const caseData = caseStudies[caseId];
    if (!caseData) return;
    
    title.textContent = caseData.title;
    
    content.innerHTML = `
        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <span class="bg-mental-teal text-white px-3 py-1 rounded-full text-sm font-medium">${caseData.category}</span>
                <span class="text-mental-grey text-sm">${caseData.duration}</span>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold text-mental-dark mb-3">Presenting Problem</h3>
                <p class="text-mental-grey leading-relaxed">${caseData.presentingProblem}</p>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold text-mental-dark mb-3">Assessment Tools Used</h3>
                <div class="flex flex-wrap gap-2">
                    ${caseData.assessmentTools.map(tool => 
                        `<span class="bg-mental-blue/20 text-mental-blue px-3 py-1 rounded text-sm">${tool}</span>`
                    ).join('')}
                </div>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold text-mental-dark mb-3">Interventions</h3>
                <ul class="list-disc list-inside text-mental-grey space-y-1">
                    ${caseData.interventions.map(intervention => `<li>${intervention}</li>`).join('')}
                </ul>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold text-mental-dark mb-3">Course of Therapy</h3>
                <p class="text-mental-grey leading-relaxed">${caseData.courseOfTherapy}</p>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold text-mental-dark mb-3">Outcome</h3>
                <p class="text-mental-grey leading-relaxed">${caseData.outcome}</p>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold text-mental-dark mb-3">Key Takeaways</h3>
                <p class="text-mental-grey leading-relaxed">${caseData.keyTakeaways}</p>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

// Close case modal
function closeCaseModal() {
    const modal = document.getElementById('case-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Download case PDF (placeholder)
function downloadCasePDF() {
    // In a real implementation, this would generate and download a PDF
    alert('PDF download functionality would be implemented here. This would generate an anonymized case summary PDF for the selected case study.');
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('case-modal');
    if (e.target === modal) {
        closeCaseModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCaseModal();
    }
});
