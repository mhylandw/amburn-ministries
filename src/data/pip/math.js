/**
 * Pip Knowledge Base — Mathematics
 *
 * Structure per topic:
 *   id          — unique slug
 *   title       — display name
 *   keywords    — words in a child's question that suggest this topic
 *   concepts    — core ideas Pip should help the child discover
 *   vocabulary  — terms the child will need; Pip can ask "what does ___ mean?"
 *   pipPrompts  — Socratic questions Pip can cycle through (never gives the answer)
 *   hints       — ordered scaffolding steps (used in non-AI mode, hint 0 first)
 *   misconceptions — common wrong turns so Pip can gently probe them
 */

export const math = {
  subject: 'math',
  label: 'Mathematics',
  bands: {

    // ─── K–2  (Ages 5–7) ────────────────────────────────────────────────────
    k2: {
      label: 'K–2 · Ages 5–7',
      topics: [
        {
          id: 'counting',
          title: 'Counting & Number Sense',
          keywords: ['count', 'how many', 'number', 'one two three', 'more', 'less', 'fewer'],
          concepts: [
            'One-to-one correspondence — each object gets exactly one number',
            'Cardinality — the last number said tells how many are in the group',
            'Numbers have a fixed order (number line)',
            'Comparing quantities: more, fewer, equal',
          ],
          vocabulary: ['digit', 'count', 'number', 'more', 'fewer', 'equal', 'zero'],
          pipPrompts: [
            'Can you touch each one and say a number as you touch it?',
            'What number did you say last — is that how many there are total?',
            'Which pile do you think has more? How could you check?',
            'What number comes right after {n}?',
            'If I took one away, how many would be left?',
          ],
          hints: [
            'Try pointing to each object and saying a number out loud as you go.',
            'The last number you said is your answer — that\'s the total.',
            'To compare two groups, try lining them up side by side.',
          ],
          misconceptions: [
            'Skipping objects or counting one twice',
            'Thinking the last number is just a label, not the total count',
            'Confusing "more" with "bigger size" rather than quantity',
          ],
        },
        {
          id: 'addition-basics',
          title: 'Addition — Putting Together',
          keywords: ['add', 'plus', 'put together', 'altogether', 'total', 'sum', 'and'],
          concepts: [
            'Addition means joining two groups',
            'The order of addends doesn\'t change the sum (commutative)',
            'Adding zero leaves a number unchanged',
            'Counting on from the larger number is more efficient than counting all',
          ],
          vocabulary: ['add', 'plus', 'sum', 'total', 'addend', 'equals'],
          pipPrompts: [
            'If you had {a} apples and someone gave you {b} more, what would you do to find out how many you have?',
            'Which number is bigger — could you start counting from there?',
            'What does the + sign tell you to do?',
            'Can you draw dots to show both groups, then count them all?',
            'Does it matter which group you count first?',
          ],
          hints: [
            'Draw a picture with two groups of dots — one group for each number.',
            'Now count all the dots together.',
            'Try starting at the bigger number and counting up.',
          ],
          misconceptions: [
            'Recounting the first group instead of counting on',
            'Thinking 3+5 and 5+3 are different problems',
            'Writing the larger number in the answer because "bigger wins"',
          ],
        },
        {
          id: 'subtraction-basics',
          title: 'Subtraction — Taking Away',
          keywords: ['subtract', 'take away', 'minus', 'left', 'remaining', 'difference', 'less'],
          concepts: [
            'Subtraction means removing from a group or finding the difference',
            'The starting number must be large enough (no negatives at this stage)',
            'Subtraction and addition are related (fact families)',
            'Counting back on a number line',
          ],
          vocabulary: ['subtract', 'minus', 'take away', 'difference', 'remaining'],
          pipPrompts: [
            'How many did you start with? What happened to some of them?',
            'Can you draw all {n} and then cross out the ones that left?',
            'What does "take away" mean in this problem?',
            'If you counted backward from {n}, where would you land after {k} steps?',
            'What addition fact could help you here?',
          ],
          hints: [
            'Draw the starting number of objects.',
            'Cross out however many are being taken away.',
            'Count what\'s left — that\'s your answer.',
          ],
          misconceptions: [
            'Subtracting the larger digit from the smaller regardless of position',
            'Confusing "how many are left" with "how many were taken"',
          ],
        },
        {
          id: 'place-value-basic',
          title: 'Place Value — Tens & Ones',
          keywords: ['tens', 'ones', 'place', 'digit', 'value', 'double digit', 'two-digit'],
          concepts: [
            'A digit\'s value depends on its position',
            'Tens place = groups of ten; ones place = singles',
            'The number 24 = 2 tens + 4 ones = 20 + 4',
            'Expanded form unpacks a number by place',
          ],
          vocabulary: ['digit', 'place', 'tens', 'ones', 'value', 'expanded form'],
          pipPrompts: [
            'In the number {n}, which digit is on the left — what does that position mean?',
            'How many groups of ten are hiding in {n}?',
            'If I gave you {n} blocks, how would you bundle them into groups of ten?',
            'What\'s the difference between the number 32 and the number 23?',
          ],
          hints: [
            'Draw base-ten blocks: long bars for tens, small squares for ones.',
            'Count the tens bars first, then add on the ones.',
            'Write the number as __ tens and __ ones.',
          ],
          misconceptions: [
            'Reading digits without considering position (e.g., 34 = 3 and 4, not 30 + 4)',
            'Thinking the tens digit is "bigger" just because it comes first',
          ],
        },
        {
          id: 'shapes-basic',
          title: 'Geometry — Basic Shapes',
          keywords: ['shape', 'circle', 'square', 'triangle', 'rectangle', 'sides', 'corners'],
          concepts: [
            'Shapes are defined by their properties (sides, angles, vertices)',
            'A square is a special rectangle',
            'Shapes can be found in the real world',
            '2D (flat) vs. 3D (solid) shapes',
          ],
          vocabulary: ['sides', 'corners', 'vertices', 'edge', 'face', 'flat', 'solid'],
          pipPrompts: [
            'How many sides does that shape have? Are they all the same length?',
            'Does that shape have any corners? How many?',
            'Can you find something in the room that looks like that shape?',
            'What makes a square different from a rectangle?',
          ],
          hints: [
            'Count the sides of the shape carefully.',
            'Count the corners (where two sides meet).',
            'Compare those numbers to each shape name\'s definition.',
          ],
          misconceptions: [
            'Thinking a rotated square is a different shape',
            'Confusing "sides" and "corners"',
          ],
        },
      ],
    },

    // ─── 3–5  (Ages 8–10) ──────────────────────────────────────────────────
    '35': {
      label: '3–5 · Ages 8–10',
      topics: [
        {
          id: 'multiplication',
          title: 'Multiplication',
          keywords: ['multiply', 'times', 'product', 'groups of', 'rows', 'arrays', 'factor'],
          concepts: [
            'Multiplication is repeated addition',
            'An array shows rows × columns',
            'Commutative: 4×3 = 3×4',
            'The zero and identity properties',
            'Relationship between multiplication and division',
          ],
          vocabulary: ['factor', 'product', 'multiply', 'array', 'row', 'column', 'times'],
          pipPrompts: [
            'What does 4 × 3 mean in words — could you say it as "groups of"?',
            'Can you draw an array with {rows} rows and {cols} columns? How many squares total?',
            'What addition sentence says the same thing as {a} × {b}?',
            'If 3 × 4 = 12, what can you figure out about 4 × 3 without recalculating?',
            'How could knowing 5×6 help you figure out 6×6?',
          ],
          hints: [
            'Write out the repeated addition first: {a}+{a}+{a}...',
            'Draw an array — rows going across, columns going down.',
            'Count the total squares in your array.',
          ],
          misconceptions: [
            'Thinking multiplication always makes things bigger (breaks with 0 and 1)',
            'Adding instead of multiplying because "it\'s easier"',
            'Confusing rows and columns in arrays',
          ],
        },
        {
          id: 'division',
          title: 'Division',
          keywords: ['divide', 'share', 'split', 'quotient', 'divisor', 'how many each', 'left over', 'remainder'],
          concepts: [
            'Division: sharing equally OR grouping into sets',
            'The inverse of multiplication',
            'Remainders when things don\'t divide evenly',
            'Division by 1 and by itself',
          ],
          vocabulary: ['dividend', 'divisor', 'quotient', 'remainder', 'equal groups'],
          pipPrompts: [
            'What are we trying to split — and how many groups are we splitting into?',
            'If you had {n} cookies and wanted to share them equally among {d} friends, how would you start?',
            'What multiplication fact could work backward to help here?',
            'After you divide, will there be anything left over?',
            'What\'s the difference between "sharing" division and "grouping" division?',
          ],
          hints: [
            'Draw {n} objects and circle groups of {d}.',
            'Count how many complete groups you made.',
            'Check: does anything remain that can\'t form a full group?',
          ],
          misconceptions: [
            'Thinking the order matters (12÷3 ≠ 3÷12 — this one actually matters, unlike multiplication)',
            'Forgetting to check for remainders',
            'Confusing "how many in each group" with "how many groups"',
          ],
        },
        {
          id: 'fractions-intro',
          title: 'Fractions — Introduction',
          keywords: ['fraction', 'half', 'third', 'quarter', 'numerator', 'denominator', 'equal parts'],
          concepts: [
            'A fraction describes equal parts of a whole or a set',
            'Denominator = number of equal parts total',
            'Numerator = number of parts we\'re talking about',
            'Unit fractions (1/n) as building blocks',
            'Equivalent fractions name the same amount',
          ],
          vocabulary: ['numerator', 'denominator', 'fraction', 'equivalent', 'unit fraction', 'whole'],
          pipPrompts: [
            'What does the bottom number of a fraction tell you?',
            'If you cut a pizza into {d} equal slices and took {n}, what fraction is that?',
            'Is 1/2 bigger or smaller than 1/4? How could you check with a drawing?',
            'Can you find two fractions that look different but name the same amount?',
            'What happens to the fraction if both top and bottom numbers double?',
          ],
          hints: [
            'Draw a shape and divide it into equal parts — the denominator tells you how many.',
            'Shade in the number of parts shown by the numerator.',
            'To compare fractions, draw both and see which shaded area is larger.',
          ],
          misconceptions: [
            'Thinking 1/4 > 1/2 because 4 > 2',
            'Comparing fractions by only looking at numerators or only denominators',
            'Adding fractions by adding both top and bottom numbers',
          ],
        },
        {
          id: 'area-perimeter',
          title: 'Area & Perimeter',
          keywords: ['area', 'perimeter', 'square units', 'around', 'boundary', 'inside', 'measure'],
          concepts: [
            'Perimeter = total distance around the outside',
            'Area = the space covered inside',
            'Area of a rectangle = length × width',
            'Same perimeter ≠ same area',
          ],
          vocabulary: ['perimeter', 'area', 'square unit', 'length', 'width', 'dimension'],
          pipPrompts: [
            'Are we measuring around the outside or inside the shape?',
            'If you were an ant walking the edge of the shape, how far would you walk?',
            'How many unit squares could you fit inside without overlapping?',
            'Can you make a different shape with the same perimeter but different area?',
          ],
          hints: [
            'For perimeter: add up all the side lengths.',
            'For area: count the square units inside, or multiply length × width for a rectangle.',
          ],
          misconceptions: [
            'Using multiplication for perimeter instead of addition',
            'Thinking a bigger perimeter always means a bigger area',
          ],
        },
        {
          id: 'decimals-intro',
          title: 'Decimals',
          keywords: ['decimal', 'point', 'tenths', 'hundredths', 'money', 'cents'],
          concepts: [
            'Decimals extend place value past the ones place',
            'Tenths: 0.1 = one part of ten equal pieces',
            'Hundredths: 0.01 = one part of a hundred equal pieces',
            'Connection to fractions and money',
          ],
          vocabulary: ['decimal', 'decimal point', 'tenths', 'hundredths', 'place value'],
          pipPrompts: [
            'What does the decimal point separate?',
            'How is 0.5 related to the fraction 1/2?',
            'In the number 3.7, what does the 7 represent?',
            'Which is bigger, 0.3 or 0.30? How do you know?',
          ],
          hints: [
            'Think of a dollar: $0.1 is 10 cents, $0.01 is 1 cent.',
            'Tenths are like slicing something into 10 equal pieces.',
          ],
          misconceptions: [
            'Thinking 0.10 < 0.9 because "10 < 9" (ignoring place value)',
            'Adding a zero after the decimal changes the value (it doesn\'t)',
          ],
        },
      ],
    },

    // ─── 6–8  (Ages 11–13) ──────────────────────────────────────────────────
    '68': {
      label: '6–8 · Ages 11–13',
      topics: [
        {
          id: 'ratios-proportions',
          title: 'Ratios & Proportions',
          keywords: ['ratio', 'proportion', 'rate', 'unit rate', 'scale', 'for every', 'per', 'out of'],
          concepts: [
            'A ratio compares two quantities',
            'Proportional relationships maintain a constant ratio',
            'Unit rate: the value when one quantity equals 1',
            'Cross-multiplication to solve proportions',
            'Scaling up and down preserves proportionality',
          ],
          vocabulary: ['ratio', 'proportion', 'rate', 'unit rate', 'constant of proportionality'],
          pipPrompts: [
            'What two quantities are being compared here?',
            'If 3 items cost $12, how much does 1 item cost? How did you get there?',
            'How would you check whether two ratios are equivalent?',
            'What stays the same when a relationship is proportional?',
            'Can you set up a table of equivalent ratios?',
          ],
          hints: [
            'Write the ratio as a fraction: part/whole or quantity A / quantity B.',
            'Find the unit rate by dividing both sides to get 1 on the bottom.',
            'Test proportionality: does quantity A ÷ quantity B always equal the same number?',
          ],
          misconceptions: [
            'Confusing ratio with fraction (ratios can compare part-to-part)',
            'Thinking proportions always involve whole numbers',
          ],
        },
        {
          id: 'integers',
          title: 'Integers & Negative Numbers',
          keywords: ['negative', 'integer', 'opposite', 'absolute value', 'below zero', 'debt', 'temperature'],
          concepts: [
            'Integers extend the number line in both directions',
            'Negative numbers represent values below zero',
            'Absolute value = distance from zero (always positive)',
            'Adding a negative = subtracting; subtracting a negative = adding',
            'Number line as a mental model',
          ],
          vocabulary: ['integer', 'negative', 'positive', 'opposite', 'absolute value', 'number line'],
          pipPrompts: [
            'Where would {n} sit on the number line relative to zero?',
            'What is the opposite of {n}, and what does "opposite" mean here?',
            'If you owe someone $5, how would you write that as a number?',
            'What\'s the difference between -3 and the absolute value of -3?',
            'When you subtract a negative number, what actually happens on the number line?',
          ],
          hints: [
            'Draw a number line and place both numbers on it.',
            'Absolute value is just the distance from zero — ignore the sign.',
            'Remember: subtraction is "adding the opposite."',
          ],
          misconceptions: [
            'Thinking -8 > -2 because 8 > 2',
            'Confusing absolute value with removing the negative sign in equations',
            'Two negatives always make a positive (true for multiplication, not addition)',
          ],
        },
        {
          id: 'expressions-equations',
          title: 'Expressions & Equations',
          keywords: ['variable', 'expression', 'equation', 'solve', 'simplify', 'combine like terms', 'coefficient'],
          concepts: [
            'An expression has no equals sign; an equation does',
            'Variables represent unknown or changing values',
            'Like terms can be combined (same variable, same exponent)',
            'Properties: distributive, commutative, associative',
            'Inverse operations to isolate variables',
          ],
          vocabulary: ['variable', 'coefficient', 'constant', 'expression', 'equation', 'like terms', 'solution'],
          pipPrompts: [
            'What does the variable represent in this situation?',
            'What operation is being done to the variable — how do you undo it?',
            'Are there any like terms you could combine first?',
            'What would happen if you did the same thing to both sides of the equation?',
            'How could you check whether your solution is correct?',
          ],
          hints: [
            'Identify what operation is applied to the variable.',
            'Use the inverse operation on both sides to isolate it.',
            'Plug your answer back into the original equation to verify.',
          ],
          misconceptions: [
            'Adding terms with different variables (3x + 2y ≠ 5xy)',
            'Only performing an operation on one side of the equation',
            'Thinking "simplify" and "solve" mean the same thing',
          ],
        },
        {
          id: 'geometry-intermediate',
          title: 'Geometry — Angles & Triangles',
          keywords: ['angle', 'triangle', 'degrees', 'parallel', 'perpendicular', 'congruent', 'similar', 'protractor'],
          concepts: [
            'Angles are measured in degrees; a full turn = 360°',
            'Triangle angle sum = 180°',
            'Types of triangles: equilateral, isosceles, scalene, right',
            'Parallel lines cut by a transversal create equal angles',
            'Congruent = same size/shape; similar = same shape, different size',
          ],
          vocabulary: ['angle', 'degree', 'vertex', 'acute', 'obtuse', 'right angle', 'congruent', 'similar', 'transversal'],
          pipPrompts: [
            'What do all three angles in a triangle add up to?',
            'If you know two angles of a triangle, how could you find the third?',
            'What\'s the difference between congruent shapes and similar shapes?',
            'If two lines are parallel, what do you know about the angles formed when a third line crosses them?',
          ],
          hints: [
            'Write out: angle A + angle B + angle C = 180°. Fill in what you know.',
            'Solve for the missing angle by subtracting the known angles from 180.',
          ],
          misconceptions: [
            'Thinking the largest angle must be opposite the longest side (actually true — worth exploring why)',
            'Confusing congruent with equal (they mean the same for geometric figures)',
          ],
        },
        {
          id: 'probability',
          title: 'Probability & Statistics',
          keywords: ['probability', 'chance', 'likely', 'unlikely', 'mean', 'median', 'mode', 'range', 'data', 'average'],
          concepts: [
            'Probability = favorable outcomes / total outcomes',
            'Probability ranges from 0 (impossible) to 1 (certain)',
            'Mean: sum divided by count (average)',
            'Median: middle value when ordered',
            'Mode: most frequent value',
            'Range: max minus min',
          ],
          vocabulary: ['probability', 'outcome', 'event', 'mean', 'median', 'mode', 'range', 'frequency'],
          pipPrompts: [
            'How many possible outcomes are there in total?',
            'How many of those outcomes match what you\'re looking for?',
            'Can you order the data from least to greatest to find the median?',
            'What\'s the difference between mean and median — when might they give different pictures of the data?',
          ],
          hints: [
            'List all possible outcomes first.',
            'Count the ones you want, then divide by the total.',
            'For mean: add all values, then divide by how many there are.',
          ],
          misconceptions: [
            'Thinking past results affect future independent events (gambler\'s fallacy)',
            'Confusing median with mean',
            'Thinking higher probability always means the event will happen soon',
          ],
        },
      ],
    },

    // ─── 9–12  (Ages 14–18) ─────────────────────────────────────────────────
    '912': {
      label: '9–12 · Ages 14–18',
      topics: [
        {
          id: 'algebra',
          title: 'Algebra — Linear & Quadratic',
          keywords: ['linear', 'quadratic', 'slope', 'intercept', 'function', 'parabola', 'factor', 'FOIL', 'quadratic formula'],
          concepts: [
            'Linear functions: y = mx + b; slope is rate of change',
            'Systems of equations: intersection = shared solution',
            'Quadratics: parabolic shape, two potential roots',
            'Factoring vs. quadratic formula vs. completing the square',
            'Domain and range of functions',
          ],
          vocabulary: ['slope', 'y-intercept', 'linear', 'quadratic', 'vertex', 'discriminant', 'roots', 'domain', 'range'],
          pipPrompts: [
            'What does the slope tell you about how the two variables relate?',
            'Where does the parabola cross the x-axis — what does that tell you about the roots?',
            'What does the discriminant tell you before you even finish solving?',
            'Could you factor this, or would the quadratic formula be safer here?',
            'What method would you choose to solve this system, and why?',
          ],
          hints: [
            'Identify the form of the equation (linear, quadratic, etc.) first.',
            'For quadratics: try factoring; if that fails, use the quadratic formula.',
            'Check discriminant (b²–4ac): positive = 2 roots, zero = 1 root, negative = no real roots.',
          ],
          misconceptions: [
            'Thinking slope is rise/run only as a formula without understanding the rate meaning',
            'Forgetting ± when taking a square root to solve a quadratic',
            'Distributing incorrectly — especially with negative signs',
          ],
        },
        {
          id: 'geometry-advanced',
          title: 'Geometry — Proofs & Trigonometry',
          keywords: ['proof', 'theorem', 'Pythagorean', 'sine', 'cosine', 'tangent', 'SOHCAHTOA', 'similar triangles', 'congruence'],
          concepts: [
            'Pythagorean theorem: a² + b² = c² for right triangles',
            'Trig ratios: SOH-CAH-TOA define sine, cosine, tangent',
            'Similar triangles have proportional sides',
            'Proof structure: given → statements → reasons → conclusion',
            'Special right triangles: 30-60-90 and 45-45-90',
          ],
          vocabulary: ['hypotenuse', 'adjacent', 'opposite', 'sine', 'cosine', 'tangent', 'theorem', 'postulate', 'congruent', 'proof'],
          pipPrompts: [
            'Which sides of the right triangle do you know, and which are you solving for?',
            'Which trig ratio connects those two sides?',
            'For a proof, what are you given, and what do you need to show is true?',
            'What theorem or postulate justifies this step?',
            'Can you identify a pair of similar triangles — what makes you sure they\'re similar?',
          ],
          hints: [
            'Label the triangle: which angle are you working from? Mark opposite, adjacent, hypotenuse.',
            'SOH: sin = opp/hyp; CAH: cos = adj/hyp; TOA: tan = opp/adj.',
            'For proofs: work from both ends toward the middle.',
          ],
          misconceptions: [
            'Applying Pythagorean theorem to non-right triangles',
            'Confusing which side is "opposite" vs "adjacent" (depends on the reference angle)',
          ],
        },
        {
          id: 'statistics-advanced',
          title: 'Statistics & Data Analysis',
          keywords: ['standard deviation', 'normal distribution', 'correlation', 'regression', 'hypothesis', 'sample', 'population', 'bias'],
          concepts: [
            'Standard deviation measures spread around the mean',
            'Normal distribution: 68-95-99.7 rule',
            'Correlation ≠ causation',
            'Linear regression fits a line to data',
            'Sampling bias can skew results',
          ],
          vocabulary: ['standard deviation', 'variance', 'normal distribution', 'correlation', 'regression', 'outlier', 'sample', 'population', 'bias'],
          pipPrompts: [
            'What does a high standard deviation tell you about the data compared to a low one?',
            'Two things are correlated — does that mean one causes the other? What else could explain it?',
            'What makes a sample representative of the population?',
            'Where might bias have entered this study\'s data collection?',
          ],
          hints: [
            'Standard deviation: a small value means data is clustered near the mean.',
            'For correlation, always ask: is there a third variable causing both?',
          ],
          misconceptions: [
            'Confusing correlation with causation',
            'Thinking a larger sample always removes bias (biased method at scale is still biased)',
          ],
        },
        {
          id: 'precalculus',
          title: 'Pre-Calculus — Functions & Limits',
          keywords: ['function', 'inverse', 'composite', 'logarithm', 'exponent', 'limit', 'asymptote', 'exponential', 'transformation'],
          concepts: [
            'A function maps each input to exactly one output',
            'Inverse functions "undo" each other',
            'Exponential growth/decay: f(x) = a·bˣ',
            'Logarithms are the inverse of exponentials',
            'Limits describe what a function approaches, not necessarily reaches',
          ],
          vocabulary: ['function', 'domain', 'range', 'inverse', 'composite', 'asymptote', 'logarithm', 'exponential', 'limit'],
          pipPrompts: [
            'Does every input have exactly one output — how can you test that graphically?',
            'If f(x) does something, what would f⁻¹(x) need to do to reverse it?',
            'In an exponential function, what does the base tell you about growth or decay?',
            'What happens to this function as x gets very, very large?',
            'What\'s the difference between a function being undefined and its limit being undefined?',
          ],
          hints: [
            'Vertical line test: if a vertical line hits the graph twice, it\'s not a function.',
            'To find an inverse: swap x and y, then solve for y.',
            'log_b(x) asks: "b to what power equals x?"',
          ],
          misconceptions: [
            'Thinking f⁻¹(x) = 1/f(x) (that\'s the reciprocal, not the inverse)',
            'Assuming exponential and linear growth look the same short-term (they often do — the difference shows up later)',
          ],
        },
      ],
    },
  },
}
