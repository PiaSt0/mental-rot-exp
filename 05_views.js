
// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `Thank you for participating in this experiment!`,
    buttonText: 'Proceed to Instructions'
});

// For most tasks, you need instructions views
const instructions_before_practice = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'instructions_before_practice',
    title: 'General Instructions',
    text:  `This experiment comprises simple key press tasks.
            For each task, you will be presented with a picture showing
            two either different or identical 3-dimensional objects.
            If you think that the objects are the same (except for their orientation),
            press "j".
            If you think they are different, press "k".
            <br />
            <br />
            Please try to decide as accurate and as fast as possible.
            <br />
            <br />
            Before the experiment starts, you will have a some instances of the
            task for practice, where you will additionally receive feedback
            about the correctness of your answer (i.e. the key you pressed).
            You will be informed, when the main experiment starts.
            <br />
            <br />
            Click on the button below to proceed to the practice trials.`,
    buttonText: 'Start practice'
});

const instructions_before_main = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'instructions_before_main',
    title: 'Get ready for the main experiment',
    text:  `Great, you have finished all practice trials.
            The following part will be the main experiment,
            your task and the instructions stay the same.
            However, you will not be displayed any feedback about the
            correctness of your answer anymore.
            <br />
            <br />
            Again: Please try to answer as fast and accurate as possible.
            You can now continue the experiment by pressing the button below.`,
    buttonText: 'Start main part'
});


// In the post test questionnaire you can ask your participants addtional questions
const postTest = magpieViews.view_generator("post_test", {
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial life cycle - https://github.com/magpie-project/magpie-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view
        More about hooks - https://github.com/magpie-project/magpie-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/magpie-project/magpie-project/blob/master/docs/views.md#properties-of-trial
*/

// Here, we initialize a keyPress task
const practice_trials_view = custom_views.keypress_rotation_practice({
    trials: 12,
    // trials: 2,
    name: 'practice_trials_view',
    trial_type: 'practice_trials',
    pause: 250,
    data: _.shuffle(practice_trials.key_press),
    key1: "f",
    key2: "j",
    f: "same",
    j: "different",
});


const main_trials_view = custom_views.keypress_rotation_main({
    trials: 48,
    // trials: 8,
    name: 'main_trials_view',
    trial_type: 'main_trials',
    pause: 250,
    data: _.shuffle(main_trials.key_press),
    key1: "f",
    key2: "j",
    f: "same",
    j: "different",
});

// There are many more templates available:
// forcedChoice, sliderRating, dropdownChoice, testboxInput, ratingScale, imageSelection, sentenceChoice, keyPress, selfPacedReading and selfPacedReading_ratingScale
