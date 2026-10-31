const u = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const coach = {
  name: 'Arjun Rao',
  brand: 'FORGE',
  phone: '+91 97000 54321',
  email: 'train@forgewitharjun.in',
  address: 'FORGE Studio, 2nd Floor, Madhapur Main Road, Hyderabad 500081',
  img: u('1583454110551-21f2fa2afe61', 1000),
}

export const heroImg = u('1534438327276-14e5300c3a48', 2000)

export const programs = [
  {
    slug: 'fat-loss', name: 'Fat Loss Accelerator', short: 'Lose fat, keep muscle, feel lighter in 12 weeks.', weeks: 12, level: 'All levels', sessions: '4× / week',
    img: u('1571019613454-1cb2f99b2d8b'), color: 'from-orange-500/30',
    features: ['Custom calorie & macro plan', 'Metabolic strength circuits', 'Weekly progress check-ins', 'Step & cardio targets', 'Habit coaching', 'WhatsApp support'],
    schedule: [['Mon', 'Full-body strength'], ['Tue', 'HIIT conditioning'], ['Thu', 'Lower body + core'], ['Sat', 'Upper body + finisher']],
    pricing: [{ name: 'Online', price: 4999, period: 'month', perks: ['App-based workouts', 'Nutrition plan', 'Weekly check-in'] }, { name: 'Hybrid', price: 8999, period: 'month', popular: true, perks: ['Everything in Online', '4 studio sessions / month', 'Body composition scans'] }, { name: '1-on-1', price: 15999, period: 'month', perks: ['12 personal sessions / month', 'Daily accountability', 'Priority support'] }],
  },
  {
    slug: 'muscle-gain', name: 'Muscle Builder', short: 'Progressive hypertrophy training for real size and strength.', weeks: 16, level: 'Intermediate', sessions: '5× / week',
    img: u('1581009146145-b5ef050c2e1e'), color: 'from-volt-500/30',
    features: ['Periodised hypertrophy plan', 'Lean-bulk nutrition', 'Technique video reviews', 'Strength benchmarks', 'Supplement guidance', 'Recovery protocols'],
    schedule: [['Mon', 'Push'], ['Tue', 'Pull'], ['Wed', 'Legs'], ['Fri', 'Upper'], ['Sat', 'Lower + arms']],
    pricing: [{ name: 'Online', price: 5499, period: 'month', perks: ['App-based workouts', 'Lean-bulk meal plan', 'Form reviews'] }, { name: 'Hybrid', price: 9499, period: 'month', popular: true, perks: ['Everything in Online', '4 studio sessions / month', 'Monthly DEXA-style scan'] }, { name: '1-on-1', price: 16999, period: 'month', perks: ['12 personal sessions / month', 'Competition prep option', 'Priority support'] }],
  },
  {
    slug: 'general-fitness', name: 'Total Fitness', short: 'Build strength, mobility and energy for everyday life.', weeks: 8, level: 'Beginner', sessions: '3× / week',
    img: u('1594737625785-a6cbdabd333c'), color: 'from-sky-500/30',
    features: ['Beginner-friendly strength', 'Mobility & posture work', 'Simple healthy-eating guide', 'Fortnightly check-ins', 'Home or gym options'],
    schedule: [['Mon', 'Strength foundations'], ['Wed', 'Mobility + cardio'], ['Fri', 'Full-body circuit']],
    pricing: [{ name: 'Online', price: 3499, period: 'month', perks: ['App-based workouts', 'Eating guide', 'Fortnightly check-in'] }, { name: 'Hybrid', price: 6999, period: 'month', popular: true, perks: ['Everything in Online', '4 studio sessions / month', 'Posture assessment'] }, { name: '1-on-1', price: 12999, period: 'month', perks: ['12 personal sessions / month', 'Flexible timings', 'Priority support'] }],
  },
  {
    slug: 'nutrition', name: 'Nutrition Coaching', short: 'Indian-friendly meal plans that fit your life — no crash diets.', weeks: 8, level: 'All levels', sessions: 'Weekly calls',
    img: u('1490645935967-10de6ba17061'), color: 'from-emerald-500/30',
    features: ['Personalised Indian meal plans', 'Veg, non-veg & Jain options', 'Grocery lists & recipes', 'Eating-out strategies', 'Weekly video calls', 'Blood-work review'],
    schedule: [['Week 1', 'Assessment & baseline'], ['Week 2–4', 'Build habits & plan'], ['Week 5–8', 'Optimise & maintain']],
    pricing: [{ name: 'Starter', price: 2499, period: 'month', perks: ['Meal plan', 'Recipe pack', 'Chat support'] }, { name: 'Coached', price: 4499, period: 'month', popular: true, perks: ['Everything in Starter', 'Weekly video call', 'Plan updates every week'] }, { name: 'Premium', price: 7999, period: 'month', perks: ['Daily food log review', 'Blood-work review', 'Family plan (2 people)'] }],
  },
]

export const transformations = [
  { name: 'Rahul K.', age: 32, result: '-18 kg', weeks: 16, program: 'fat-loss', before: u('1567013127542-490d757e51fc', 800), after: u('1517836357463-d25dfeac3438', 800), quote: 'I had tried every diet. Arjun gave me a plan I could actually follow with my IT job — and I’ve kept the weight off for a year.' },
  { name: 'Sneha P.', age: 28, result: '-11 kg', weeks: 12, program: 'fat-loss', before: u('1518611012118-696072aa579a', 800), after: u('1594737625785-a6cbdabd333c', 800), quote: 'Lost 11 kg without giving up rice or my mom’s cooking. The weekly check-ins kept me honest.' },
  { name: 'Vikas M.', age: 25, result: '+7 kg lean', weeks: 20, program: 'muscle-gain', before: u('1549060279-7e168fcee0c2', 800), after: u('1581009146145-b5ef050c2e1e', 800), quote: 'Went from skinny to strong. My bench went from 50 kg to 95 kg.' },
  { name: 'Meera S.', age: 45, result: 'Pain-free', weeks: 8, program: 'general-fitness', before: u('1544367567-0f2fcb009e0b', 800), after: u('1571019613454-1cb2f99b2d8b', 800), quote: 'My back pain is gone and I have the energy to keep up with my kids again.' },
]

export const certifications = [
  ['NSCA-CSCS', 'Certified Strength & Conditioning Specialist'],
  ['ACE-CPT', 'Certified Personal Trainer'],
  ['Precision Nutrition L1', 'Certified Nutrition Coach'],
  ['FMS Level 2', 'Functional Movement Screen'],
  ['B.Sc. Sports Science', 'Osmania University'],
]

export const posts = [
  { slug: 'protein-indian-diet', title: 'How to Hit 120 g Protein on an Indian Diet', tag: 'Nutrition', read: '5 min', img: u('1490645935967-10de6ba17061', 900),
    body: ['Most Indian meals are carb-heavy, but hitting your protein target is easier than you think.', 'Start every meal with a protein anchor: paneer, eggs, chicken, dal, curd or soya chunks. A bowl of Greek-style curd (hung curd) gives about 15 g; 100 g of paneer gives about 18 g.', 'Add a whey or plant protein shake if you are short at the end of the day — it is food, not magic.', 'Track for one week to learn portion sizes, then you can stop tracking and eyeball it.'] },
  { slug: 'beginner-gym-mistakes', title: '5 Mistakes Beginners Make in the Gym', tag: 'Training', read: '4 min', img: u('1534438327276-14e5300c3a48', 900),
    body: ['1. Ego lifting — add weight only when your form is clean for every rep.', '2. No plan — random workouts give random results. Follow a program for at least 8 weeks.', '3. Skipping legs — lower-body training burns more calories and builds total strength.', '4. Ignoring sleep — muscle is built while you recover, not while you train.', '5. Comparing yourself — compare only with who you were last month.'] },
  { slug: 'fat-loss-plateau', title: 'Stuck on a Fat-Loss Plateau? Do This', tag: 'Fat loss', read: '6 min', img: u('1476480862126-209bfaa8edc8', 900),
    body: ['Plateaus are normal — your body adapts. First, check the basics: are you really eating what you think?', 'Increase daily steps by 2,000 before cutting more food.', 'Take a diet break: eat at maintenance for 7–10 days, then resume your deficit.', 'Prioritise strength training to preserve muscle and keep your metabolism healthy.'] },
]

export const rupee = (n) => '₹' + n.toLocaleString('en-IN')
