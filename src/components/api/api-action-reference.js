import React from 'react';
import { BemTags } from '@scipe/ui';
import RegisterAction from './api-register-action';
import InformAction from './api-inform-action';
import AssessAction from './api-assess-action';
import CreateWorkflowSpecificationAction from './api-create-workflow-specification-action';
import AcceptAction from './api-accept-action';
import PublishAction from './api-publish-action';
import ActivateAction from './api-activate-action';
import RejectAction from './api-reject-action';
import AskAction from './api-ask-action';
import CreateGraphAction from './api-create-graph-action';
import ReplyAction from './api-reply-action';
import CreateOrganizationAction from './api-create-organization-action';
import AssignAction from './api-assign-action';
import CreatePeriodicalAction from './api-create-periodical-action';
import ReviewAction from './api-review-action';
import CreatePublicationTypeAction from './api-create-publication-type-action';
import CreateReleaseAction from './api-create-release-action';
import ArchiveAction from './api-archive-action';
import AuthorizeAction from './api-authorize-action';
import BuyAction from './api-buy-action';
import PayAction from './api-pay-action';
import CreateServiceAction from './api-create-service-action';
import CancelAction from './api-cancel-action';
import ScheduleAction from './api-schedule-action';
import CommentAction from './api-comment-action';
import DeactivateAction from './api-deactivate-action';
import TagAction from './api-tag-action';
import DeauthorizeAction from './api-deauthorize-action';
import UnassignAction from './api-unassign-action';
import EndorseAction from './api-endorse-action';
import UpdateAction from './api-update-action';
import InviteAction from './api-invite-action';
import JoinAction from './api-join-action';
import LeaveAction from './api-leave-action';
import AssignUrlAction from './api-assign-url-action';
import UnassignUrlAction from './api-unassign-url-action';
import AssignContactPointAction from './api-assign-contact-point-action';
import UnassignContactPointAction from './api-unassign-contact-point-action';
import AuthorizeContributorAction from './api-authorize-contributor-action';
import DeauthorizeContributorAction from './api-deauthorize-contributor-action';

// import UploadAction from './api-upload-action';
// import ImageProcessingAction from './api-image-processing-action';
// import AudioVideoProcessingAction from './api-audio-video-processing-action';
// import TypesettingAction from './api-typesetting-action';
// import DocumentProcessingAction from './api-document-processing-action';

export default class ApiConcepts extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="action-reference" className={bem`api @__section`}>
        <h2 className={bem`@__default-ui-type--headline`}>Action Reference</h2>

        {/* keep sorted by alphabetical order */}

        <AcceptAction />
        <ActivateAction />
        <AskAction />
        <ArchiveAction />
        <AssessAction />
        <AssignAction />
        <AssignContactPointAction />
        <AssignUrlAction />

        <AuthorizeAction />
        <AuthorizeContributorAction />

        <BuyAction />

        <CancelAction />
        <CommentAction />
        <CreateGraphAction />
        <CreateOrganizationAction />
        <CreatePeriodicalAction />
        <CreatePublicationTypeAction />
        <CreateReleaseAction />
        <CreateServiceAction />
        <CreateWorkflowSpecificationAction />

        <DeactivateAction />
        <DeauthorizeAction />
        <DeauthorizeContributorAction />

        <EndorseAction />

        <InformAction />
        <InviteAction />

        <JoinAction />

        <LeaveAction />

        <PayAction />
        <PublishAction />

        <RegisterAction />
        <RejectAction />
        <ReplyAction />
        <ReviewAction />

        <ScheduleAction />

        <TagAction />

        <UnassignAction />
        <UnassignContactPointAction />
        <UnassignUrlAction />
        <UpdateAction />

        {/*
            <UploadAction />
            <ImageProcessingAction />
            <AudioVideoProcessingAction />
            <DocumentProcessingAction />
            <TypesettingAction />
          */}
      </section>
    );
  }
}
