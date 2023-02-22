interface CampaignProps {
  id: string;
  title: string;
  description: string;
  quota: number;
  isActive: boolean;
  startedDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

class Campaign {
  private props: CampaignProps;

  get id() {
    return this.props.id;
  }

  get title() {
    return this.props.title;
  }

  get description() {
    return this.props.description;
  }

  get quota() {
    return this.props.quota;
  }

  get isActive() {
    return this.props.isActive;
  }

  get startedDate() {
    return this.props.startedDate;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  constructor(props: CampaignProps) {
    this.props = props;
  }
}

export { Campaign, CampaignProps };
