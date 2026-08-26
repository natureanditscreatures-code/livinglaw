import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Quote,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/Icon';
import { BookTile } from '@/components/BookTile';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { pillars } from '@/data/pillars';
import { consultations } from '@/data/consultations';
import { products } from '@/data/products';
import { articles } from '@/data/articles';
import { site } from '@/config';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <Section className="!py-0 pt-28 md:pt-36" tone="gradient">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-4">Evidence-informed health education</p>
            <h1 className="text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.2rem]">
              Understand the rhythms that{' '}
              <span className="text-[var(--primary)]">shape human health</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--fg-muted)]">
              The Living Law explores how light, sleep, food, movement, stress,
              and connection interact with human biology—then turns that evidence
              into practical questions and habits for everyday life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="link" to="/pillars">
                Explore the Six Pillars <ArrowRight size={16} />
              </Button>
              <Button as="link" to="/consultations" variant="outline">
                Book a Consultation
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--fg-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[var(--primary)]" /> Evidence clearly distinguished from interpretation
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[var(--primary)]" /> Education, not diagnosis or treatment
              </span>
            </div>
          </motion.div>

          {/* Book tile playcard */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:pl-4"
          >
            <BookTile />
          </motion.div>
        </div>
      </Section>

      {/* ============================ PILLARS ============================ */}
      <Section id="pillars" tone="muted">
        <SectionHeading
          eyebrow="The Six Pillars"
          title="The protocols that shape your health"
          intro="Explore six connected areas of daily life. Each pillar explains the relevant biology, the strength of available evidence, and practical options to discuss with qualified professionals when needed."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.slug}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={reveal}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <Card hover className="h-full">
                <CardBody className="h-full">
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[var(--bg-muted)] text-[var(--primary)]">
                    <Icon name={p.icon} size={22} />
                  </span>
                  <h3 className="text-xl">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                    {p.tagline}
                  </p>
                  <Link
                    to={`/pillars/${p.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-600 text-[var(--primary)] transition hover:gap-2.5"
                  >
                    Reveal the science <ArrowRight size={14} />
                  </Link>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ============================ FORGOTTEN BLUEPRINT BAND ============================ */}
      <Section className="relative overflow-hidden bg-[var(--color-forest-900)] py-24 text-[var(--color-paper-100)] md:py-32">
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[var(--color-forest-400)] blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[var(--color-earth-500)] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <Quote className="mx-auto mb-6 text-[var(--color-forest-300)]" size={36} />
          <p className="font-display text-2xl leading-relaxed md:text-4xl md:leading-snug">
            Better health information should make uncertainty visible, separate
            evidence from interpretation, and leave people more capable of asking
            informed questions.
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[var(--color-forest-200)]/80">
            The Living Law editorial principle
          </p>
        </div>
      </Section>

      {/* ============================ AUTHOR ============================ */}
      <Section id="about">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-muted)] p-7 sm:p-9">
            <p className="eyebrow">Led by</p>
            <p className="mt-3 font-display text-4xl font-700">{site.author.name}</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-[var(--fg-muted)]">
              {site.author.role}
            </p>
            <p className="mt-6 leading-relaxed text-[var(--fg-muted)]">
              Ajit also serves in editorial leadership for Living Law and Vedion.
              A full biography, credentials, editorial responsibilities, and
              relevant disclosures will be published before launch.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">About the project</p>
            <h2 className="text-3xl md:text-5xl">
              Health education that respects evidence, context, and individual difference.
            </h2>
            <div className="prose-living mt-6">
              <p>
                The Living Law begins with a practical question: how can people
                understand the biological effects of daily life without reducing
                complex health questions to slogans, fear, or miracle claims?
              </p>
              <p>
                The project combines long-form explanation, transparent evidence
                standards, and realistic practices. It acknowledges uncertainty
                and does not replace diagnosis, treatment, or licensed care.
              </p>
            </div>
            <Button as="link" to="/about" variant="outline" className="mt-6">
              Learn More <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>
      </Section>

      {/* ============================ CONSULTATIONS ============================ */}
      <Section id="consultations" tone="muted">
        <SectionHeading
          eyebrow="Personal Guidance"
          title="Personal Health Consultations"
          intro="Educational lifestyle guidance to help you examine routines, goals, and questions for discussion with your healthcare team. Consultations do not diagnose, prescribe, or replace licensed medical care."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {consultations.map((c, i) => (
            <motion.div
              key={c.slug}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={reveal}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card hover className="flex h-full flex-col">
                <CardBody className="flex h-full flex-col">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--bg-muted)] text-[var(--primary)]">
                      <Icon name={c.icon} size={22} />
                    </span>
                    <span className="text-xs text-[var(--fg-muted)]">
                      {c.duration}
                    </span>
                  </div>
                  <h3 className="text-xl">{c.title}</h3>
                  <p className="mt-1 text-sm font-500 text-[var(--color-earth-500)]">
                    {c.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">
                    {c.summary}
                  </p>
                  <Button
                    as="link"
                    to={`/consultations?service=${c.slug}`}
                    className="mt-6 w-full"
                  >
                    Book This Service
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ============================ PRODUCTS ============================ */}
      <Section id="products">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            align="left"
            eyebrow="Resources & kits"
            title="Practical tools with clear explanations"
            intro="Each proposed resource should explain its intended use, evidence, limitations, materials, price, and safety considerations before it is offered for sale."
          />
          <Button as="link" to="/products" variant="outline" className="mb-2 shrink-0">
            View all kits <ArrowRight size={16} />
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p, i) => (
            <motion.div
              key={p.slug}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={reveal}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card hover className="group h-full overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[var(--bg-elevated)]/90 px-3 py-1 text-[11px] font-600 uppercase tracking-wider text-[var(--primary)] backdrop-blur">
                    {p.price}
                  </span>
                </div>
                <CardBody>
                  <h3 className="text-lg">{p.name}</h3>
                  <p className="mt-1.5 text-sm text-[var(--fg-muted)]">
                    {p.tagline}
                  </p>
                  <Link
                    to="/products"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-600 text-[var(--primary)] transition hover:gap-2.5"
                  >
                    View kit <ArrowRight size={14} />
                  </Link>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ============================ CHALLENGE BAND ============================ */}
      <Section className="bg-[var(--color-forest-900)] py-20 text-[var(--color-paper-100)] md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3 !text-[var(--color-forest-200)]">
              The 30-Day Turning Point
            </p>
            <h2 className="text-3xl md:text-5xl">
              Build a healthier rhythm, one repeatable step at a time.
            </h2>
            <p className="mt-5 max-w-xl text-[var(--color-forest-100)]/85">
              A four-week educational programme for observing routines, testing
              manageable changes, and reflecting on what is sustainable. It makes
              no promise of treatment or guaranteed biological outcomes.
            </p>
            <Button as="link" to="/challenge" className="mt-7">
              Begin the Turning Point <ArrowRight size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '01', t: 'The Awakening', d: 'Observe the drift' },
              { n: '02', t: 'The Re-alignment', d: 'Send clean signals' },
              { n: '03', t: 'The Integration', d: 'Build the rhythm' },
              { n: '04', t: 'The Sovereignty', d: 'The new normal' },
            ].map((w) => (
              <div
                key={w.n}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="font-display text-2xl text-[var(--color-forest-300)]">
                  {w.n}
                </p>
                <p className="mt-2 font-600">{w.t}</p>
                <p className="text-xs text-[var(--color-forest-100)]/70">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================ LATEST RESEARCH ============================ */}
      <Section id="research" tone="muted">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            align="left"
            eyebrow="Research & interpretation"
            title="Explore the evidence"
            intro="Long-form explanations of human biology and daily living, with sources, limitations, and interpretation kept visibly distinct."
          />
          <Button as="link" to="/articles" variant="outline" className="mb-2 shrink-0">
            All articles <ArrowRight size={16} />
          </Button>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {articles.slice(0, 2).map((a, i) => (
            <motion.div
              key={a.slug}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={reveal}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/articles/${a.slug}`} className="group block">
                <Card hover className="h-full overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardBody>
                    <div className="flex items-center gap-3 text-xs text-[var(--fg-muted)]">
                      <span className="font-600 uppercase tracking-wider text-[var(--primary)]">
                        {a.series}
                      </span>
                      <span>·</span>
                      <span>{a.readTime}</span>
                    </div>
                    <h3 className="mt-3 text-2xl transition group-hover:text-[var(--primary)]">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                      {a.excerpt}
                    </p>
                  </CardBody>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ============================ NEWSLETTER / PLEDGE ============================ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8 md:p-10">
            <Sparkles className="mb-4 text-[var(--color-earth-500)]" />
            <h2 className="text-3xl md:text-4xl">Reclaim Your Health</h2>
            <p className="mt-3 text-[var(--fg-muted)]">
              Receive new articles, evidence updates, and practical educational
              resources. No miracle claims, spam, or substitute for medical care.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>

          <PledgeCounter />
        </div>
      </Section>
    </>
  );
}

// Animated "people reclaiming health" counter (illustrative).
function PledgeCounter() {
  return (
    <div className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-[var(--color-forest-700)] to-[var(--color-forest-900)] p-8 text-[var(--color-paper-100)] md:p-10">
      <p className="eyebrow !text-[var(--color-forest-200)]">The Movement</p>
      <p className="mt-4 font-display text-5xl md:text-6xl">12,480</p>
      <p className="mt-2 text-lg text-[var(--color-forest-100)]/85">
        people reclaiming health worldwide
      </p>
      <p className="mt-6 leading-relaxed text-[var(--color-forest-100)]/75">
        The spring of vitality still flows within you. It has never stopped—
        weakened but not extinguished. The knowing that another way exists is the
        strongest guard of all.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button as="link" to="/challenge">
          Take the Pledge
        </Button>
        <Button as="link" to="/articles" variant="outline" className="!border-white/30 !text-[var(--color-paper-100)] hover:!text-white">
          Read the research
        </Button>
      </div>
    </div>
  );
}
