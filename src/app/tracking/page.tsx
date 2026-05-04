import type { Metadata } from "next";
import { CapabilityHero } from "@/components/sections/capability-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpecTable } from "@/components/sections/spec-table";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCard } from "@/components/sections/feature-card";
import { Crosshair, Layers, GitBranch } from "lucide-react";

export const metadata: Metadata = {
  title: "Tracking — Aegis",
  description: "IMM-UKF tracking algorithms. 500+ simultaneous tracks at 50Hz. Swarm-capable.",
};

export default function TrackingPage() {
  return (
    <>
      <CapabilityHero
        image="/images/satellite.jpg"
        title="Tracking"
        subtitle="500+ simultaneous tracks. 50Hz update. Swarm-capable."
      />

      {/* IMM Filter */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="Algorithm"
                title="Interacting Multiple Model"
                subtitle="The IMM filter maintains multiple motion models simultaneously — constant velocity, coordinated turn, and accelerating — switching between them in under 50ms as target behavior changes. 3G+ turn rate handling for aggressive UAS maneuvers."
              />
            </div>
            <div className="space-y-4">
              <FeatureCard icon={Crosshair} title="< 50ms Model Switching" description="Seamless transition between motion models as target behavior evolves" />
              <FeatureCard icon={Crosshair} title="3G+ Turn Rates" description="Handles aggressive UAS maneuvers with coordinated turn model" />
              <FeatureCard icon={Crosshair} title="Multi-Hypothesis" description="Maintains alternate track hypotheses during ambiguous observations" />
            </div>
          </div>
        </div>
      </section>

      {/* UKF */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-4 md:order-2">
              <FeatureCard icon={Layers} title="Sigma Point Sampling" description="Unscented transform captures mean and covariance without linearization errors" />
              <FeatureCard icon={Layers} title="7-State Vector" description="Position (3), velocity (3), turn rate (1) — minimal state for maximum performance" />
              <FeatureCard icon={Layers} title="Consistency Maintained" description="Normalized estimation error squared (NEES) validated across all operating conditions" />
            </div>
            <div className="md:order-1">
              <SectionHeading
                badge="Estimation"
                title="Unscented Kalman Filter"
                subtitle="The UKF uses sigma point sampling to propagate mean and covariance through nonlinear motion and observation models. No linearization errors. A 7-state vector — three position, three velocity, one turn rate — balances estimation accuracy with computational efficiency at 50Hz."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Swarm Management */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Swarm"
            title="Elastic Mesh Tracking"
            subtitle="When multiple UAS operate in proximity, Aegis builds an elastic mesh of correlated tracks. Autonomous association handles track merge, split, and handoff without operator intervention. 500+ tracks maintained simultaneously."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
            <FeatureCard icon={GitBranch} title="Track Merge & Split" description="Automatic detection and handling of swarm formation changes" />
            <FeatureCard icon={GitBranch} title="Autonomous Association" description="Unsupervised track-to-track correlation across sensor modalities" />
            <FeatureCard icon={GitBranch} title="Elastic Scaling" description="Dynamic resource allocation from 1 to 500+ tracks without degradation" />
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 md:py-28 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Specifications" title="Tracking Parameters" />
          <div className="mt-16 max-w-2xl">
            <SpecTable
              specs={[
                { key: "Algorithm", value: "IMM-UKF" },
                { key: "Motion Models", value: "CV, CT, CA" },
                { key: "Model Switching", value: "< 50ms" },
                { key: "Turn Rate Handling", value: "3G+" },
                { key: "State Vector", value: "7-state (pos, vel, turn)" },
                { key: "Sigma Points", value: "Unscented transform" },
                { key: "Max Tracks", value: "500+" },
                { key: "Update Rate", value: "50Hz" },
                { key: "Track Association", value: "Autonomous multi-hypothesis" },
                { key: "Swarm Handling", value: "Elastic mesh" },
                { key: "Track Merge/Split", value: "Automatic" },
                { key: "Track Initiation", value: "Multi-sensor confirmation" },
                { key: "Track Lifecycle", value: "Initiate → Confirm → Maintain → Delete" },
                { key: "Prediction Horizon", value: "10s forward" },
                { key: "Coordinate Frame", value: "WGS-84 / Local ENU" },
                { key: "Latency", value: "≤ 20ms" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection heading="Tracking Briefing" description="Evaluate Aegis tracking performance against your threat scenarios." />
    </>
  );
}
