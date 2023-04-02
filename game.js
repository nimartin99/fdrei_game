new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        slideIndex: 0,
        sliderText: [
            'Bei uns herrscht Chaos, was <span class="bold">Strukturen</span> und <span class="bold">Prozesse</span> betrifft.',
            'Bei uns herrscht Chaos in Bezug auf <span class="bold">Verantwortlichkeiten</span> und <span class="bold">Rollenverteilung</span>.',
            'Unsere <span class="bold">Teams</span> funktionieren nicht so effektiv wie gewünscht.',
            'Wir schaffen es nicht, <span class="bold">Deadlines</span> einzuhalten.',
            'Jedes Projekt wird nur mit <span class="bold">größter Mühe pünktlich</span> abgegeben.',
            'Wichtige <span class="bold">Informationen</span> bleiben bei uns des Öfteren auf der Strecke oder <span class="bold">gehen unter</span>.',
            'In Zukunft möchten wir <span class="bold">kundenzentrierter</span> arbeiten.',
            'In letzter Zeit fehlt uns etwas <span class="bold">Pepp</span> hinter unseren Projekten.',
            'Kommende <span class="bold">Kreativprojekte</span> wollen wir mit <span class="bold">neuen Ansätzen</span> angehen und verfolgen.',
            'Unterstützung bei unserem <span class="bold">Gründungsvorhaben</span> wäre sehr hilfreich.',
            'Wir wollen einen langfristigen Partner auf Augenhöhe als Unterstützung aufkommender Probleme.',
        ],
        sliderValue: [
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
            // 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6
        ],
        sliderThreshold: 5,
        showResults: false,
        solutionHeaders: ['Prozesse und Workflows', 'Hot-Topic Coaching', 'Follow-up Supervision', 'Gründungsunterstützung'],
        availableSolutions: [
            // 0
            { text: 'Arbeitsprozesse', selected: false },
            // 1
            { text: 'Kommunikations- & Informationsflow', selected: false },
            // 2
            { text: 'Teamstruktur', selected: false },
            // 3
            { text: 'Customer Journey Touchpoints', selected: false },
            // 4
            { text: 'Zeitmanagement', selected: false },
            // 5
            { text: 'Kreativitätstechniken', selected: false },
            // 6
            { text: 'Team Building', selected: false },
            // 7
            { text: 'Embodied Design', selected: false },
            // 8
            { text: 'Newsletter', selected: false },
            // 9
            { text: 'Langzeit Mentoring', selected: false },
            // 10
            { text: 'Feedback Evaluation', selected: false },
            // 11
            { text: 'Gründungsunterstützung', selected: false },
        ],
        selectedSolutions: [[], [], [], []],
    },
    methods: {
        reset() {
            this.sliderValue = [ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ];
            this.selectedSolutions = [[], [], [], []];
            this.showResults = false;
            this.slideIndex = 0;
        },
        previousSlide() {
            if(this.slideIndex > 0) {
                this.slideIndex--;
            }
        },
        nextSlide() {
            if(this.slideIndex === this.sliderText.length - 1) {
                this.calculateResults();
                this.showResults = true;
            } else {
                this.slideIndex++;
            }
        },
        calculateResults() {
            // Prozesse und Workflows
            if(this.sliderValue[0] > this.sliderThreshold) {
                this.pushToSelectedSolutions(0, 0);
                this.pushToSelectedSolutions(2, 9);
            }
            if(this.sliderValue[1] > this.sliderThreshold) {
                this.pushToSelectedSolutions(0, 1);
                this.pushToSelectedSolutions(0, 2);
                this.pushToSelectedSolutions(1, 6);
            }
            if(this.sliderValue[2] > this.sliderThreshold) {
                this.pushToSelectedSolutions(0, 2);
                this.pushToSelectedSolutions(1, 6);
            }
            if(this.sliderValue[3] > this.sliderThreshold) {
                this.pushToSelectedSolutions(1, 4);
            }
            if(this.sliderValue[4] > this.sliderThreshold) {
                this.pushToSelectedSolutions(1, 4);
            }
            if(this.sliderValue[5] > this.sliderThreshold) {
                this.pushToSelectedSolutions(0, 0);
                this.pushToSelectedSolutions(0, 1);
                this.pushToSelectedSolutions(0, 2);
            }
            if(this.sliderValue[6] > this.sliderThreshold) {
                this.pushToSelectedSolutions(0, 3);
                this.pushToSelectedSolutions(1, 7);
                this.pushToSelectedSolutions(2, 10);
            }
            if(this.sliderValue[7] > this.sliderThreshold) {
                this.pushToSelectedSolutions(1, 5);
                this.pushToSelectedSolutions(1, 7);
                this.pushToSelectedSolutions(2, 10);
            }
            if(this.sliderValue[8] > this.sliderThreshold) {
                this.pushToSelectedSolutions(1, 5);
            }
            if(this.sliderValue[9] > this.sliderThreshold) {
                this.pushToSelectedSolutions(3, 11);
            }
            if(this.sliderValue[10] > this.sliderThreshold) {
                this.pushToSelectedSolutions(2, 8);
                this.pushToSelectedSolutions(2, 9);
                this.pushToSelectedSolutions(2, 10);
            }
        },
        pushToSelectedSolutions(col, solutionIndex) {
            if(!this.selectedSolutions[col].some((el) => el.text === this.availableSolutions[solutionIndex].text)) {
                this.selectedSolutions[col].push(this.availableSolutions[solutionIndex]);
            }
        }
    }
})