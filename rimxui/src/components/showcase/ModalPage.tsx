import { CliTabs } from "../CliTabs/CliTab";
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
  ModalClose,
} from "../Modals/modal";
import PreviewWrapper from "../PreviewWrapper";
import { Trash2 } from "lucide-react";

export const ModalPage = () => {
  return (
    <div className="space-y-12 max-w-4xl">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-lg bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-sm font-medium">
          <span>Components</span>
          <span className="mx-2 text-neutral-400 dark:text-neutral-500">/</span>
          <span>Modal</span>
        </div>
        <h1 className="text-h1 text-neutral-900 dark:text-neutral-100">
          Modals
        </h1>
        <p className="text-body-lg text-neutral-500 dark:text-neutral-400">
          A versatile modal component for presenting content in an overlay
          format with various styles and customizations.
        </p>
      </div>

      <section id="#installation">
        <h1 className="text-h4 mb-6">Installation</h1>
        <CliTabs
          commands={{
            pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/modals.json",
            npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/modals.json",
            bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/modals.json",
            yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/modals.json",
          }}
        />
      </section>

      <PreviewWrapper
        label="Edit Profile"
        variant="centered"
        preview={
          <Modal>
            <div className="flex justify-center items-center ">
              <ModalTrigger>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow">
                  Edit Profile
                </button>
              </ModalTrigger>
            </div>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>Edit Profile</ModalTitle>
                <ModalDescription>Update your personal info</ModalDescription>
              </ModalHeader>
              <ModalBody>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded p-2"
                />
              </ModalBody>
              <ModalFooter>
                <ModalClose>
                  <button className="px-4 py-2 border rounded">Cancel</button>
                </ModalClose>
                <button className="px-4 py-2 bg-blue-600 text-white rounded">
                  Save
                </button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        }
        code={`
import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter, ModalClose } from "@/components/Modals/modal"
function moodals () {
return (
<Modal>
    <div className="flex justify-center items-center ">
        <ModalTrigger>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow">
            Edit Profile
        </button>
        </ModalTrigger>
    </div>
    <ModalContent>
        <ModalHeader>
        <ModalTitle>Edit Profile</ModalTitle>
        <ModalDescription>Update your personal info</ModalDescription>
        </ModalHeader>
        <ModalBody>
        <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded p-2"
        />
        </ModalBody>
        <ModalFooter>
        <ModalClose>
            <button className="px-4 py-2 border rounded">Cancel</button>
        </ModalClose>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Save
        </button>
        </ModalFooter>
    </ModalContent>
    </Modal>
    )
} 

`}
      />

      <PreviewWrapper
        label="Delete"
        variant="centered"
        preview={
          <Modal>
            <div className="flex justify-center items-center ">
              <ModalTrigger>
                <button className="px-4 py-2 bg-red-500 text-white rounded-xl shadow flex items-center gap-2">
                  <Trash2 /> Delete
                </button>
              </ModalTrigger>
            </div>
            <ModalContent>
              <ModalBody>
                <div className="text-center">
                  <Trash2 size={48} className="mx-auto text-red-500" />
                  <ModalTitle className="mt-4">Delete Item?</ModalTitle>
                  <ModalDescription>
                    This action cannot be undone.
                  </ModalDescription>
                </div>
              </ModalBody>
              <ModalFooter>
                <ModalClose>
                  <button className="px-4 py-2 bg-gray-100 text-black rounded">
                    Cancel
                  </button>
                </ModalClose>
                <button className="px-4 py-2 bg-red-500 text-white rounded">
                  Delete
                </button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        }
        code={`
                    import { Modal, ModalTrigger, ModalContent, ModalTitle, ModalDescription, ModalBody, ModalFooter, ModalClose } from "@/components/Modals/modal"
                    import { Trash2 } from "lucide-react";

                    <Modal>
                        <div className="flex justify-center items-center ">
                            <ModalTrigger>
                                <button className="px-4 py-2 bg-red-500 text-white rounded-xl shadow flex items-center gap-2">
                                    <Trash2 /> Delete
                                </button>
                            </ModalTrigger>
                        </div>
                        <ModalContent>
                            <ModalBody>
                                <div className="text-center">
                                    <Trash2 size={48} className="mx-auto text-red-500" />
                                    <ModalTitle className="mt-4">Delete Item?</ModalTitle>
                                    <ModalDescription>This action cannot be undone.</ModalDescription>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <ModalClose>
                                    <button className="px-4 py-2 bg-gray-100 rounded">Cancel</button>
                                </ModalClose>
                                <button className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>`}
      />

      <PreviewWrapper
        label="Share link"
        variant="centered"
        preview={
          <Modal>
            <div className="flex justify-center items-center ">
              <ModalTrigger>
                <button className="px-4 py-2 bg-green-600 text-white rounded-xl shadow">
                  Share
                </button>
              </ModalTrigger>
            </div>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>Share link</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <div className="flex gap-2">
                  <input
                    value="https://example.com/share/123"
                    readOnly
                    className="w-full border rounded text-black p-2"
                  />
                  <button className="bg-green-500 text-white px-3 rounded">
                    Copy
                  </button>
                </div>
              </ModalBody>
              <ModalFooter>
                <ModalClose>
                  <button className="text-sm  px-4 py-2 bg-gray-100 text-black rounded">
                    Close
                  </button>
                </ModalClose>
              </ModalFooter>
            </ModalContent>
          </Modal>
        }
        code={`
                    import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalClose } from "@/components/Modals/modal"

                    <Modal>
                        <div className="flex justify-center items-center ">
                            <ModalTrigger>
                                <button className="px-4 py-2 bg-green-600 text-white rounded-xl shadow">Share</button>
                            </ModalTrigger>
                        </div>
                        <ModalContent>
                            <ModalHeader>
                                <ModalTitle>Share link</ModalTitle>
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex gap-2">
                                    <input value="https://example.com/share/123" readOnly className="w-full border rounded p-2" />
                                    <button className="bg-green-500 text-white px-3 rounded">Copy</button>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <ModalClose>
                                    <button className="text-sm text-gray-500">Close</button>
                                </ModalClose>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>`}
      />
      <PreviewWrapper
        label="File upload"
        variant="centered"
        preview={
          <Modal>
            <div className="flex justify-center items-center ">
              <ModalTrigger>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow">
                  Apply Now
                </button>
              </ModalTrigger>
            </div>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>File upload</ModalTitle>
                <ModalDescription>Upload your file</ModalDescription>
              </ModalHeader>
              <ModalBody>
                <input type="file" className="w-full border rounded p-2" />
              </ModalBody>
              <ModalFooter>
                <ModalClose>
                  <button className="px-4 py-2 border rounded">Cancel</button>
                </ModalClose>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded">
                  Submit
                </button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        }
        code={`
                    import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter, ModalClose } from "@/components/Modals/modal"

                    <Modal>
                        <div className="flex justify-center items-center ">
                            <ModalTrigger>
                                <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow">Apply Now</button>
                            </ModalTrigger>
                        </div>
                        <ModalContent>
                            <ModalHeader>
                                <ModalTitle>File upload</ModalTitle>
                                <ModalDescription>Upload your file</ModalDescription>
                            </ModalHeader>
                            <ModalBody>
                                <input type="file" className="w-full border rounded p-2" />
                            </ModalBody>
                            <ModalFooter>
                                <ModalClose>
                                    <button className="px-4 py-2 border rounded">Cancel</button>
                                </ModalClose>
                                <button className="px-4 py-2 bg-indigo-600 text-white rounded">Submit</button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>`}
      />
      <PreviewWrapper
        label="Success"
        variant="centered"
        preview={
          <Modal>
            <div className="flex justify-center items-center ">
              <ModalTrigger>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl shadow">
                  Complete
                </button>
              </ModalTrigger>
            </div>
            <ModalContent>
              <ModalBody>
                <div className="text-center">
                  <span className="text-emerald-500 text-6xl">🎉</span>
                  <ModalTitle className="mt-4">Success!</ModalTitle>
                  <ModalDescription>
                    Your changes have been saved.
                  </ModalDescription>
                </div>
              </ModalBody>
              <ModalFooter>
                <ModalClose>
                  <button className="w-full px-4 py-2 bg-emerald-600 text-white rounded">
                    OK
                  </button>
                </ModalClose>
              </ModalFooter>
            </ModalContent>
          </Modal>
        }
        code={`
                    import { Modal, ModalTrigger, ModalContent, ModalBody, ModalFooter, ModalClose } from "@/components/Modals/modal"

                    <Modal>
                        <div className="flex justify-center items-center ">
                            <ModalTrigger>
                                <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl shadow">Complete</button>
                            </ModalTrigger>
                        </div>
                        <ModalContent>
                            <ModalBody>
                                <div className="text-center">
                                    <span className="text-emerald-500 text-6xl">🎉</span>
                                    <ModalTitle className="mt-4">Success!</ModalTitle>
                                    <ModalDescription>Your changes have been saved.</ModalDescription>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <ModalClose>
                                    <button className="w-full px-4 py-2 bg-emerald-600 text-white rounded">OK</button>
                                </ModalClose>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>`}
      />
    </div>
  );
};
