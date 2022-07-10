<script >
    const resume = {
        contact: {
            email: "dsardak@wpi.edu",
            number: "617-233-5788",
            address: "44 Summer Street Sudbury, MA 01776",
        },
        categories: {
            Objective: [
                "Be accepted in a summer internship where I can use my knowledge and gain experience in computer science, data analysis, or machine learning. ",
            ],
            "Languages": [
                'English - Native Speaker, Russian - Fluent '
            ]
        },
        sections: {
            education: {
                "Worcester Polytechnic Institute, Worcester, MA": {
                    date: "05/2025",
                    description: "Bachelor of Science - Data Science & Computer Science with a concentration in cybersecurity",
                },
                "Advanced Math and Science Academy, Marlborough, MA": {
                    date: "05/2021",
                    description: "High School Diploma"
                },
            },
            "Activities/Leadership": {
                "Cybersecurity Club, Worcester Polytechnic Institute": {
                    date: "09/2021 - Present",
                    description: "",
                },
            },
            Skills: {
                "Programming Languages: Experienced in Java, HTML, CSS, SQL, and Python. Familiar with C/C++": {
                    date: "",
                    description: "",
                },
                "Software: Experienced in Microsoft Office": {
                    date: "",
                    description: "",
                },
                "Essential business techniques: writing business plans, fundraising, and elevator pitches": {
                    date: "",
                    description: ""
                },
                "Relevant Courses: Applied Statistics I & II, Linear Algebra I, Multivariable Calculus, Discrete Mathematics": {
                    date: "",
                    description: "",
                },
            },

            "Awards/Honors": {
                    'Worcester Polytechnic Institute Dean\'s List': {
                        date: "Fall Semester 2021, Spring Semester 2022",
                        description: "",
                    },
                    'Massachusetts State Seal of Biliteracy with Distinction': {
                        date: '05/2021',
                        description: ""
                    }

                }
        
        },

        experience: {
                "Trainee, AFRI-EWD-REEU Program": {
                    date: "05/2021 - 08/2021",
                    company: "University of Maryland Eastern Shore",
                    description: [
                        'Designed and implemented a survey application powered by Flask and PostgreSQL',
                        'Implemented a “frontend and results” page using HTML and CSS to \'style and output\' the page, and used Flask to pull results from the backend systems to the frontend application',  
                    ]
                },
                "Team Leader, Social Entrepreneurship Program": {
                    date: "09/2019 - 08/2021",
                    company: "Jookender Community Initiatives",
                    description: [
                        'Designed and led several classes for Jookender\'s children about topics such as famous scientists, basic web design, and simple French phrases',
                        'Authored several published articles promoting the nonprofit Jookender, and informing its members about the organization\'s new programs'
                    ]
                },
                "Intern": {
                    date: '05/2019 - 08/2019',
                    company: 'Teen JUST-US Boston',
                    description: [
                        'Assisted in creating educational materials for the Jewish Alliance for Law and Social Action\'s (JALSA) campaign on housing injustice',
                        'Worked with organization\'s donors in updating their contact information',
                    ]
                },

            }

    }

</script>
<div class="container">
    
    <!-- <h1>Loaded</h1> -->
    {#each Object.entries(resume) as [key, value] }
        {#if key == 'contact'}
            <div class="header">
                <h1>Daniel Sardak</h1>
                {#each Object.entries(value) as [k, val] }
                {#if k != 'email'}
                <p>{val}</p>
                {:else}
                <a href={"mailto: "+val}>{val}</a>
                {/if}
                {/each}
            </div>
        {:else if key=='categories'}
            {#each Object.entries(value) as [k, val] }
                <div class="category">
                    <h5><u>{k.toUpperCase()}</u></h5>
                    {#each val as t }
                    <p>{t}</p>
                    {/each}
                </div>
            {/each}
    
        {:else if key=='sections'}
    
            {#each Object.entries(value) as [k, val]}
                <div class="section">
                    <h5><u>{k.toUpperCase()}</u></h5>
                    {#each Object.entries(val) as [k2, val2] }
                        <div class="contthing">
                            <p>{k2}</p>
                            {#if val2.date != ""}
                            <p>{val2.date}</p>
                            {/if}
                        </div>
                        {#if val2.description != ''}
                        <p class="description">{val2.description}</p>
                        {/if}
    
                    {/each}
                </div>
            {/each}
    
        {:else if key=='experience'}
        <h5><u>{key.toUpperCase()}</u></h5>
            {#each Object.entries(value) as [k, v] }
                <div class="job">
                    
                    <div class="jtop">
                        <h5>{k}</h5>
                        <p>{v.date}</p>
                    </div>

                    <p>{v.company}</p>

                    <ul>
                        {#each v.description as desc}
                            <li>{desc}</li>
                        {/each}
                    </ul>
                </div>
            {/each}
        {/if}
    
        
    
    
    
    {/each}
</div>

<style>
    .container {
        font-size: 16px;
        border: 1px solid black;
        border-radius: 2%;
        padding: 1em;
    }
    .header > p {
        margin-bottom: 0;
        margin-top: 0;
    }
    .header {
        margin-bottom: 5em;
        text-align: center;
    }
    .header a {
        color: blue;
    }

    .category h5 {
        margin-bottom: 0;
    }
    .contthing {
        display: flex;
        justify-content: space-between;
    }
    .contthing p {
        margin: 0;
    }
    .description {
        margin-top: 0;
    }
</style>