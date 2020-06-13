// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Thank you for participating in this experiment!`,
  buttonText: 'Begin the experiment'
});

// For most tasks, you need instructions views
const instructions_1 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_1',
  buttonText: 'Start practice trials',
  text: `This experiment comprises simple key press tasks.
            <br />
            <br />
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
  title: 'General Instructions'
});

const instructions_2 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_2',
  buttonText: 'Begin experiment',
  text: `Great, you have finished all practice trials.
            <br />
            <br />
            The following part will be the main experiment,
            <br />
            your task and the instructions stay the same.
            <br />
            However, you will not be displayed any feedback about the
            <br />
            correctness of your answer anymore.
            <br />
            <br />
            Again: Please try to answer as fast and accurate as possible.
            <br />
            You can now continue the experiment by pressing the button below.`,
    title: 'Practice finished -> Begin',
}),

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
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
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

// Here, we initialize a keyPress task
const key_press_practice = custom_views.keypress_rotation_practice({
    trials: 12,
    // trials: 12,
    name: 'key_press_practice',
    trial_type: 'practice',
    pause: 250,
    data: _.shuffle(practice_trials.key_press),
    key1: "f",
    key2: "j",
    f: "same",
    j: "different",
});

const key_press_main = custom_views.keypress_rotation_main({
    trials: 48,
    // trials: 48,
    name: 'key_press_main',
    trial_type: 'main',
    pause: 250,
    data: _.shuffle(main_trials.key_press),
    key1: "f",
    key2: "j",
    f: "same",
    j: "different",
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
