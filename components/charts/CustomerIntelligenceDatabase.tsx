'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  sNo: number
  customerName: string
  parentGroup: string
  country: string
  city: string
  coreIndustry: string
  facilityType: string
  businessOverview?: string
  industryVertical?: string
  totalAnnualRevenue?: string
  productTypeFocus?: string
  accessControlModernizationStatus?: string
  keyContactPerson?: string
  designation?: string
  emailAddress?: string
  phoneNumber?: string
  linkedInProfile?: string
  websiteUrl?: string
  // Professional Drivers (for Proposition 2)
  primaryMotivation?: string
  upcomingTriggers?: string
  riskLevel?: string
  // Purchasing Behaviour Metrics (for Proposition 3)
  budgetOwnership?: string
  procurementModel?: string
  budgetApproach?: string
  preferredEngagementType?: string
  // Solution Requirements (for Proposition 3)
  preferredSolutionType?: string
  preferredDeploymentModel?: string
  implementationTimeline?: string
  serviceExpectations?: string
  // CMI Insights (for Proposition 3)
  customerBenchmarking?: string
  additionalComments?: string
}

// Sample data for demonstration
const sampleCustomerData: CustomerData[] = [
  {
    sNo: 1,
    customerName: 'Saudi Aramco - Ras Tanura Refinery',
    parentGroup: 'Saudi Aramco',
    country: 'Saudi Arabia',
    city: 'Ras Tanura',
    coreIndustry: 'Oil & Gas',
    facilityType: 'Refinery',
    businessOverview: 'World\'s largest integrated energy and chemicals company',
    industryVertical: 'Oil & Gas / Energy',
    totalAnnualRevenue: '400,000',
    productTypeFocus: 'Critical Infrastructure Protection',
    accessControlModernizationStatus: 'Exploring Options',
    keyContactPerson: 'Ahmed Al-Rashid',
    designation: 'Corporate Security Director',
    emailAddress: 'a.rashid@aramco.com',
    phoneNumber: '+966 13 877 0000',
    linkedInProfile: 'linkedin.com/in/ahmedal',
    websiteUrl: 'www.aramco.com',
    primaryMotivation: 'Replace aging/legacy PAC systems, Strengthen identity-Centric security/Zero Trust',
    upcomingTriggers: 'New facility openings / campus expansions, VMS or alarm system upgrades requiring integration',
    riskLevel: 'Medium',
    budgetOwnership: 'Corporate Security',
    procurementModel: 'Via Global SI (e.g., for multi-site rollouts)',
    budgetApproach: 'Enterprise/global rollout, Capex (hardware-heavy)',
    preferredEngagementType: 'Multi-year modernization program',
    preferredSolutionType: 'Multi-site unified access platform, Biometric access (fingerprint, facial, multimodal)',
    preferredDeploymentModel: 'Private Cloud (regulated industries)',
    implementationTimeline: 'Enterprise-wide modernization: 24–36 months',
    serviceExpectations: 'System design & architecture planning, Hardware installation & cabling, 24/7 monitoring / support',
    customerBenchmarking: 'High potential - Global leader in critical infrastructure',
    additionalComments: 'Strong security focus, requires integration with existing SCADA systems'
  },
  {
    sNo: 2,
    customerName: 'ADNOC Refining - Ruwais',
    parentGroup: 'ADNOC Group',
    country: 'UAE',
    city: 'Ruwais Industrial City',
    coreIndustry: 'Oil & Gas',
    facilityType: 'Refinery',
    businessOverview: 'Leading diversified energy company',
    industryVertical: 'Oil & Gas / Energy',
    totalAnnualRevenue: '60,000',
    productTypeFocus: 'Industrial Facility Security',
    accessControlModernizationStatus: 'Pilot Testing',
    keyContactPerson: 'Fatima Al-Mansouri',
    designation: 'IT Security Head',
    emailAddress: 'f.mansouri@adnoc.ae',
    phoneNumber: '+971 2 602 0000',
    linkedInProfile: 'linkedin.com/in/fatimam',
    websiteUrl: 'www.adnoc.ae',
    primaryMotivation: 'Improve operational efficiency & central monitoring, Enable mobile credentials & lower card issuance costs',
    upcomingTriggers: 'Digital transformation initiatives, Cyber-physical security convergence projects',
    riskLevel: 'High',
    budgetOwnership: 'IT / Digital Infrastructure',
    procurementModel: 'Via Regional System Integrator (SI)',
    budgetApproach: 'Mid-scale campus program, Hybrid spend',
    preferredEngagementType: 'Pilot - Scale Model',
    preferredSolutionType: 'Cloud-based PACS, Mobile access (BLE/NFC)',
    preferredDeploymentModel: 'SaaS / Cloud PACS (growing demand)',
    implementationTimeline: 'Quick pilot: 3–6 months',
    serviceExpectations: 'Software configuration (HFR, IAM, VMS), Training & onboarding',
    customerBenchmarking: 'High potential - Active pilot with mobile credentials',
    additionalComments: 'Fast-track implementation, focus on mobile-first approach'
  },
  {
    sNo: 3,
    customerName: 'Qatar Petroleum - Mesaieed Industrial',
    parentGroup: 'QatarEnergy',
    country: 'Qatar',
    city: 'Mesaieed',
    coreIndustry: 'Oil & Gas',
    facilityType: 'Petrochemical',
    businessOverview: 'State-owned petroleum company',
    industryVertical: 'Oil & Gas / Petrochemicals',
    totalAnnualRevenue: '52,000',
    productTypeFocus: 'Petrochemical Plant Security',
    accessControlModernizationStatus: 'No Activity',
    keyContactPerson: 'Mohammed Al-Thani',
    designation: 'Facilities Manager',
    emailAddress: 'm.thani@qatarenergy.qa',
    phoneNumber: '+974 4013 3333',
    linkedInProfile: 'linkedin.com/in/mohammedt',
    websiteUrl: 'www.qatarenergy.qa',
    primaryMotivation: 'Meet compliance requirements (ISO, GDPR, regulatory mandates)',
    upcomingTriggers: 'Compliance audits prompting modernization',
    riskLevel: 'Low',
    budgetOwnership: 'Facilities Management',
    procurementModel: 'RFP-driven competitive process',
    budgetApproach: 'Pilot/Beta deployment',
    preferredEngagementType: 'Turnkey project with integrator',
    preferredSolutionType: 'Card-based access control',
    preferredDeploymentModel: 'On-Premises (traditional security-sensitive environments)',
    implementationTimeline: 'Phased migration of old hardware to new ecosystem',
    serviceExpectations: 'Compliance & audit support',
    customerBenchmarking: 'Medium potential - Early stage evaluation',
    additionalComments: 'Awaiting budget approval for modernization initiative'
  },
  {
    sNo: 4,
    customerName: 'Kuwait National Petroleum Company',
    parentGroup: 'KNPC',
    country: 'Kuwait',
    city: 'Mina Al-Ahmadi',
    coreIndustry: 'Oil & Gas',
    facilityType: 'Refinery',
    businessOverview: 'Kuwait\'s national oil refining company',
    industryVertical: 'Oil & Gas / Refining',
    totalAnnualRevenue: '35,000',
    productTypeFocus: 'Refinery Access Management',
    accessControlModernizationStatus: 'Exploring Options',
    keyContactPerson: 'Khalid Al-Sabah',
    designation: 'Physical Security Manager',
    emailAddress: 'k.sabah@knpc.com.kw',
    phoneNumber: '+965 2326 5000',
    linkedInProfile: 'linkedin.com/in/khalids',
    websiteUrl: 'www.knpc.com.kw',
    primaryMotivation: 'Reduce credential misuse (fraud, tailgating), Improve operational efficiency & central monitoring',
    upcomingTriggers: 'VMS or alarm system upgrades requiring integration, New facility openings / campus expansions',
    riskLevel: 'Medium',
    budgetOwnership: 'Corporate Strategy / Risk Management',
    procurementModel: 'Via Regional System Integrator (SI)',
    budgetApproach: 'Capex (hardware-heavy), Hybrid spend',
    preferredEngagementType: 'Turnkey project with integrator',
    preferredSolutionType: 'Biometric access (fingerprint, facial, multimodal), Smart-lock ecosystems',
    preferredDeploymentModel: 'Hybrid (local hardware + cloud management)',
    implementationTimeline: 'Mid-scale rollout: 12–18 months',
    serviceExpectations: 'Hardware installation & cabling, Managed access administration service',
    customerBenchmarking: 'Medium potential - Strategic fit for biometrics',
    additionalComments: 'Regional expansion planned, needs scalable solution'
  },
  {
    sNo: 5,
    customerName: 'DUBAL Aluminium Smelter',
    parentGroup: 'Emirates Global Aluminium',
    country: 'UAE',
    city: 'Dubai - Jebel Ali',
    coreIndustry: 'Manufacturing',
    facilityType: 'Aluminium Smelter',
    businessOverview: 'One of the world\'s largest aluminium producers',
    industryVertical: 'Manufacturing / Metals',
    totalAnnualRevenue: '6,500',
    productTypeFocus: 'Manufacturing Plant Security',
    accessControlModernizationStatus: 'Pilot Testing',
    keyContactPerson: 'Sara Al-Hashemi',
    designation: 'Operations Security Director',
    emailAddress: 's.hashemi@ega.ae',
    phoneNumber: '+971 4 802 9999',
    linkedInProfile: 'linkedin.com/in/sarah',
    websiteUrl: 'www.ega.ae',
    primaryMotivation: 'Enable mobile credentials & lower card issuance costs, Strengthen identity-Centric security/Zero Trust',
    upcomingTriggers: 'Hybrid work access flexibility needs, Digital transformation initiatives',
    riskLevel: 'High',
    budgetOwnership: 'Operations',
    procurementModel: 'Direct purchase from PAC vendor',
    budgetApproach: 'Enterprise/global rollout, Opex (cloud subscriptions)',
    preferredEngagementType: 'SaaS subscription for cloud PACS',
    preferredSolutionType: 'Cloud-based PACS, Mobile access (BLE/NFC)',
    preferredDeploymentModel: 'SaaS / Cloud PACS (growing demand)',
    implementationTimeline: 'Quick pilot: 3–6 months',
    serviceExpectations: 'Training & onboarding, 24/7 monitoring / support',
    customerBenchmarking: 'High potential - Active pilot scaling to enterprise',
    additionalComments: 'Reference customer for manufacturing sector, mobile-first approach'
  },
  {
    sNo: 6,
    customerName: 'Oman LNG - Qalhat',
    parentGroup: 'Oman LNG LLC',
    country: 'Oman',
    city: 'Qalhat - Sur',
    coreIndustry: 'Oil & Gas',
    facilityType: 'LNG Terminal',
    businessOverview: 'Major LNG producer in the Middle East',
    industryVertical: 'Oil & Gas / LNG',
    totalAnnualRevenue: '4,200',
    productTypeFocus: 'LNG Terminal Security',
    accessControlModernizationStatus: 'Exploring Options',
    keyContactPerson: 'Yusuf Al-Balushi',
    designation: 'Facilities Security Head',
    emailAddress: 'y.balushi@omanlng.com',
    phoneNumber: '+968 2520 6000',
    linkedInProfile: 'linkedin.com/in/yusufb',
    websiteUrl: 'www.omanlng.com',
    primaryMotivation: 'Replace aging/legacy PAC systems, Meet compliance requirements (ISO, GDPR, regulatory mandates)',
    upcomingTriggers: 'Compliance audits prompting modernization, VMS or alarm system upgrades requiring integration',
    riskLevel: 'Low',
    budgetOwnership: 'Facilities Management',
    procurementModel: 'Consortium or framework agreement',
    budgetApproach: 'Pilot/Beta deployment',
    preferredEngagementType: 'Long-term managed services contract',
    preferredSolutionType: 'QR-based visitor management, Card-based access control',
    preferredDeploymentModel: 'Hybrid (local hardware + cloud management)',
    implementationTimeline: 'Mid-scale rollout: 12–18 months',
    serviceExpectations: 'Managed access administration service, Compliance & audit support',
    customerBenchmarking: 'Medium potential - Focused on visitor management',
    additionalComments: 'LNG-specific security requirements, visitor management priority'
  }
]

interface PrepositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Preposition({ title, isOpen, onToggle, children }: PrepositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title, height = 600 }: CustomerIntelligenceDatabaseProps) {
  const [openPreposition, setOpenPreposition] = useState<number | null>(1)

  const togglePreposition = (num: number) => {
    setOpenPreposition(openPreposition === num ? null : num)
  }

  // Preposition 1 Table - Customer Information + Contact Details
  const renderPreposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={7} className="bg-[#DEB887] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">S.No.</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Customer Name/Company Name</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Business Overview</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Industry Vertical</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Total Annual Revenue (US$ Million)</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Product Type Focus</div>
            </th>
            <th className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Access Control Modernization Status</div>
              <div className="font-normal text-[10px] text-gray-600">(No Activity/Exploring Options/Pilot Testing (Biometrics / Mobile Access / Cloud PACS)/Scaling Enterprise-Wide)</div>
            </th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.sNo}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.productTypeFocus}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.accessControlModernizationStatus === 'Scaling Enterprise-Wide' ? 'bg-green-100 text-green-800' :
                  customer.accessControlModernizationStatus === 'Pilot Testing' ? 'bg-blue-100 text-blue-800' :
                  customer.accessControlModernizationStatus === 'Exploring Options' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {customer.accessControlModernizationStatus}
                </span>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Preposition 2 Table - Same as Preposition 1 + Professional Drivers
  const renderPreposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={7} className="bg-[#DEB887] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#4169E1] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-white">
              Professional Drivers
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">S.No.</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Customer Name/Company Name</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Business Overview</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Industry Vertical</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Total Annual Revenue (US$ Million)</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Product Type Focus</div>
            </th>
            <th className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Access Control Modernization Status</div>
              <div className="font-normal text-[10px] text-gray-600">(No Activity/Exploring Options/Pilot Testing (Biometrics / Mobile Access / Cloud PACS)/Scaling Enterprise-Wide)</div>
            </th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
            <th className="bg-[#6495ED] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Primary Motivation for Modernizing Access Control</div>
              <div className="font-normal text-[10px] text-gray-600">(Replace aging/legacy PAC systems/Strengthen identity-Centric security/Zero Trust/Meet compliance requirements (ISO, GDPR, regulatory mandates)/Improve operational efficiency & central monitoring/Reduce credential misuse (fraud, tailgating)/Enable mobile credentials & lower card issuance costs/Improve)</div>
            </th>
            <th className="bg-[#6495ED] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Upcoming Triggers / Initiatives</div>
              <div className="font-normal text-[10px] text-gray-600">(New facility openings / campus expansions/Hybrid work access flexibility needs/Cyber-physical security convergence projects/VMS or alarm system upgrades requiring integration/Digital transformation initiatives/Compliance audits prompting modernization)</div>
            </th>
            <th className="bg-[#FFEB99] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Risk Level from Non-Modernization</div>
              <div className="font-normal text-[10px] text-gray-600">(Low/Medium/High)</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.sNo}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.productTypeFocus}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.accessControlModernizationStatus === 'Scaling Enterprise-Wide' ? 'bg-green-100 text-green-800' :
                  customer.accessControlModernizationStatus === 'Pilot Testing' ? 'bg-blue-100 text-blue-800' :
                  customer.accessControlModernizationStatus === 'Exploring Options' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {customer.accessControlModernizationStatus}
                </span>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryMotivation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.upcomingTriggers}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.riskLevel === 'High' ? 'bg-red-100 text-red-800' :
                  customer.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {customer.riskLevel}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Preposition 3 Table - Same as Preposition 1/2 + Purchasing Behaviour Metrics + Solution Requirements + CMI Insights
  const renderPreposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={7} className="bg-[#DEB887] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={4} className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Purchasing Behaviour Metrics
            </th>
            <th colSpan={4} className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Solution Requirements
            </th>
            <th colSpan={3} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              CMI Insights
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information */}
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">S.No.</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Customer Name/Company Name</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Business Overview</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Industry Vertical</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Total Annual Revenue (US$ Million)</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Product Type Focus</div>
            </th>
            <th className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Access Control Modernization Status</div>
              <div className="font-normal text-[10px] text-gray-600">(No Activity/Exploring Options/Pilot Testing (Biometrics / Mobile Access / Cloud PACS)/Scaling Enterprise-Wide)</div>
            </th>
            {/* Contact Details */}
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
            {/* Purchasing Behaviour Metrics */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Budget Ownership</div>
              <div className="font-normal text-[10px] text-gray-600">(Corporate Security/IT / Digital Infrastructure/Facilities Management/Operations/Corporate Strategy / Risk Management)</div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Procurement Model</div>
              <div className="font-normal text-[10px] text-gray-600">(Direct purchase from PAC vendor/Via Regional System Integrator (SI)/Via Global SI (e.g., for multi-site rollouts)/RFP-driven competitive process/Consortium or framework agreement)</div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Budget Approach / Tier</div>
              <div className="font-normal text-[10px] text-gray-600">(Pilot/Beta deployment/Mid-scale campus program/Enterprise/global rollout/Capex (hardware-heavy)/Opex (cloud subscriptions)/Hybrid spend)</div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Preferred Engagement Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Pilot - Scale Model/Multi-year modernization program/Turnkey project with integrator/SaaS subscription for cloud PACS/Long-term managed services contract)</div>
            </th>
            {/* Solution Requirements */}
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Preferred Solution Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Card-based access control/Biometric access (fingerprint, facial, multimodal)/access (BLE/NFC)/Cloud-based PACS/Smart-lock ecosystems/QR-based visitor management/Multi-site unified access platform)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Preferred Deployment Model</div>
              <div className="font-normal text-[10px] text-gray-600">(On-Premises (traditional security-sensitive environments)/SaaS / Cloud PACS (growing demand)/Private Cloud (regulated industries)/Hybrid (local hardware + cloud management))</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Implementation Timeline / Intensity</div>
              <div className="font-normal text-[10px] text-gray-600">(Quick pilot: 3–6 months/Mid-scale rollout: 12–18 months/Enterprise-wide modernization: 24–36 months/Phased migration of old hardware to new ecosystem)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Service Expectations</div>
              <div className="font-normal text-[10px] text-gray-600">(System design & architecture planning/Hardware installation & cabling/Software configuration (HFR, IAM, VMS)/Training & onboarding/24/7 monitoring / support/Managed access administration service/Compliance & audit support)</div>
            </th>
            {/* CMI Insights */}
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Customer Benchmarking Summary</div>
              <div className="font-normal text-[10px] text-gray-600">(Potential Customers)</div>
            </th>
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Additional Comments/Notes By CMI team</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Customer Information */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.sNo}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.productTypeFocus}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.accessControlModernizationStatus === 'Scaling Enterprise-Wide' ? 'bg-green-100 text-green-800' :
                  customer.accessControlModernizationStatus === 'Pilot Testing' ? 'bg-blue-100 text-blue-800' :
                  customer.accessControlModernizationStatus === 'Exploring Options' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {customer.accessControlModernizationStatus}
                </span>
              </td>
              {/* Contact Details */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
              {/* Purchasing Behaviour Metrics */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.budgetOwnership}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.procurementModel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.budgetApproach}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredEngagementType}</td>
              {/* Solution Requirements */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredSolutionType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredDeploymentModel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.implementationTimeline}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.serviceExpectations}</td>
              {/* CMI Insights */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerBenchmarking}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.additionalComments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">Customer Intelligence Database</h2>

      <Preposition
        title="Preposition 1 - Basic"
        isOpen={openPreposition === 1}
        onToggle={() => togglePreposition(1)}
      >
        {renderPreposition1Table()}
      </Preposition>

      <Preposition
        title="Preposition 2 - Advanced"
        isOpen={openPreposition === 2}
        onToggle={() => togglePreposition(2)}
      >
        {renderPreposition2Table()}
      </Preposition>

      <Preposition
        title="Preposition 3 - Premium"
        isOpen={openPreposition === 3}
        onToggle={() => togglePreposition(3)}
      >
        {renderPreposition3Table()}
      </Preposition>
    </div>
  )
}
